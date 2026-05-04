const express = require('express');
const router = express.Router();
const Program = require('../models/program.js');

// GET all programs with optional search
router.get('/', async (req, res) => {
  try {
    const { search, category, sort } = req.query;
    let query = {};

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { tags: { $in: [new RegExp(search, 'i')] } },
        { author: { $regex: search, $options: 'i' } }
      ];
    }

    if (category && category !== 'All') {
      query.category = category;
    }

    let sortOption = { createdAt: -1 };
    if (sort === 'views') sortOption = { views: -1 };
    if (sort === 'title') sortOption = { title: 1 };

    const programs = await Program.find(query).sort(sortOption).select('-code');
    res.json({ success: true, count: programs.length, data: programs });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET single program (increment views)
router.get('/:id', async (req, res) => {
  try {
    const program = await Program.findByIdAndUpdate(
      req.params.id,
      { $inc: { views: 1 } },
      { new: true }
    );
    if (!program) return res.status(404).json({ success: false, error: 'Program not found' });
    res.json({ success: true, data: program });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST create program
router.post('/', async (req, res) => {
  try {
    const { title, description, code, category, author, tags } = req.body;
    if (!title || !code) {
      return res.status(400).json({ success: false, error: 'Title and code are required' });
    }
    const tagsArray = tags ? tags.split(',').map(t => t.trim()).filter(Boolean) : [];
    const program = await Program.create({ title, description, code, category, author, tags: tagsArray });
    res.status(201).json({ success: true, data: program });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// DELETE program
router.delete('/:id', async (req, res) => {
  try {
    const program = await Program.findByIdAndDelete(req.params.id);
    if (!program) return res.status(404).json({ success: false, error: 'Program not found' });
    res.json({ success: true, message: 'Program deleted' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;