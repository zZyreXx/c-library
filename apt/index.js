const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// ── Cached MongoDB connection (critical for serverless) ──
let isConnected = false;
async function connectDB() {
  if (isConnected) return;
  await mongoose.connect(process.env.MONGODB_URI);
  isConnected = true;
}

// ── Schema (guard against recompile on hot reload) ──
const programSchema = new mongoose.Schema({
  title:       { type: String, required: true, trim: true },
  description: { type: String, default: '' },
  code:        { type: String, required: true },
  category:    { type: String, default: 'General', enum: ['General','Sorting','Searching','Data Structures','Math','Strings','File I/O','Pointers','Recursion','Other'] },
  author:      { type: String, default: 'Anonymous' },
  tags:        [{ type: String, trim: true }],
  views:       { type: Number, default: 0 },
  createdAt:   { type: Date, default: Date.now }
});
const Program = mongoose.models.Program || mongoose.model('Program', programSchema);

// ── GET all programs ──
app.get('/api/programs', async (req, res) => {
  try {
    await connectDB();
    const { search, category } = req.query;
    let query = {};
    if (search) {
      query.$or = [
        { title:       { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { author:      { $regex: search, $options: 'i' } },
        { tags:        { $in: [new RegExp(search, 'i')] } }
      ];
    }
    if (category && category !== 'All') query.category = category;
    const programs = await Program.find(query).sort({ createdAt: -1 }).select('-code');
    res.json({ success: true, count: programs.length, data: programs });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ── GET single program ──
app.get('/api/programs/:id', async (req, res) => {
  try {
    await connectDB();
    const program = await Program.findByIdAndUpdate(
      req.params.id, { $inc: { views: 1 } }, { new: true }
    );
    if (!program) return res.status(404).json({ success: false, error: 'Not found' });
    res.json({ success: true, data: program });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ── POST create program ──
app.post('/api/programs', async (req, res) => {
  try {
    await connectDB();
    const { title, description, code, category, author, tags } = req.body;
    if (!title || !code) return res.status(400).json({ success: false, error: 'Title and code are required' });
    const tagsArray = tags ? tags.split(',').map(t => t.trim()).filter(Boolean) : [];
    const program = await Program.create({ title, description, code, category, author, tags: tagsArray });
    res.status(201).json({ success: true, data: program });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ── DELETE program ──
app.delete('/api/programs/:id', async (req, res) => {
  try {
    await connectDB();
    const program = await Program.findByIdAndDelete(req.params.id);
    if (!program) return res.status(404).json({ success: false, error: 'Not found' });
    res.json({ success: true, message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/health', (req, res) => res.json({ status: 'ok', time: new Date() }));

// ── Vercel serverless export ──
module.exports = app;