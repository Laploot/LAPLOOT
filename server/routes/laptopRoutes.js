// server/routes/laptopRoutes.js
const express = require('express');
const Laptop = require('../models/Laptop');
const cloudinary = require('../cloudinary');
const upload = require('../middleware/upload');

const router = express.Router();

// POST: create laptop + upload multiple images
router.post('/', upload.array('images', 5), async (req, res) => {
  try {
    const files = req.files;

    if (!files || files.length === 0) {
      return res.status(400).json({ message: "No images uploaded." });
    }

    // Upload images to Cloudinary and get URLs
    const imageUrls = await Promise.all(
      files.map(file =>
        new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { folder: 'laptops',
              resource_type: 'image',     
              type: 'upload',
             },
            (error, result) => {
              if (error) return reject(error);
              resolve(result.secure_url);
            }
          );
          stream.end(file.buffer);
        })
      )
    );

    // Create new Laptop entry
    const newLaptop = new Laptop({
      ...req.body,
      isPopular: req.body.isPopular === "true",
      images: imageUrls,
    });

    const savedLaptop = await newLaptop.save();
    res.status(201).json(savedLaptop);

  } catch (err) {
    console.error("❌ Server error:", err);
    res.status(500).json({ message: "Error creating laptop", error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const laptops = await Laptop.find().sort({ createdAt: -1 });
    res.status(200).json(laptops);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch laptops", error: err.message });
  }
});
router.get('/search', async (req, res) => {
  try {
    const query = req.query.query || '';
    const regex = new RegExp(query, 'i'); // case-insensitive match

    const laptops = await Laptop.find({
      $or: [
        { brand: regex },
        { modelName: regex },
        { category: regex }
      ]
    });
    res.json(laptops);
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({ message: "Search failed" });
  }
});
// GET a single laptop by ID
router.get('/:id', async (req, res) => {
  try {
    const laptop = await Laptop.findById(req.params.id);
    if (!laptop) {
      return res.status(404).json({ message: 'Laptop not found' });
    }
    res.json(laptop);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});


module.exports = router;
