const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    default: ''
  },
  code: {
    type: String,
    required: true
  },
  category: {
    type: String,
    default: 'General',
    enum: ['General', 'Sorting', 'Searching', 'Data Structures', 'Math', 'Strings', 'File I/O', 'Pointers', 'Recursion', 'Other']
  },
  author: {
    type: String,
    default: 'Anonymous'
  },
  tags: [{
    type: String,
    trim: true
  }],
  views: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

programSchema.index({ title: 'text', description: 'text', tags: 'text', code: 'text' });

module.exports = mongoose.model('Program', programSchema);