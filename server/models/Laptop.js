const mongoose = require('mongoose');

const laptopSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  modelName: {
    type: String,
    required: true,
  },
  screenSize: {
    type: String,
    required: true,
  },
  colour: {
    type: String,
    required: true,
  },
  hardDiskSize: {
    type: String,
    required: true,
  },
  cpuModel: {
    type: String,
    required: true,
  },
  ramMemory: {
    type: String,
    required: true,
  },
  operatingSystem: {
    type: String,
    required: true,
  },
  graphicsCard: {
    type: String,
    required: true,
  },
  graphicsCoprocessor: {
    type: String,
    required: true,
  },
  images: {
    type: [String], 
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  isPopular: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Laptop', laptopSchema);
