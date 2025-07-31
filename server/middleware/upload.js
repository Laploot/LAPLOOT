const multer = require('multer');

const storage = multer.memoryStorage(); // Stores file in memory (buffer)
const upload = multer({ storage });

module.exports = upload;
