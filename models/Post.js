const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    required: true,
    default: true
  },
  stressLevel: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  stressors: {
    type: String,
    required: true
  },
  stressReliefMethods: {
    type: Array,
    required: true
  },
  stressReliefPercentage: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  }
});

module.exports = mongoose.model('posts', postSchema);
