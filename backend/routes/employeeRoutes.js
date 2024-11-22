const express = require('express');
const multer = require('multer');
const Employee = require('../models/Employee');
const { protect } = require('../controllers/authController'); 

const router = express.Router();

// Set up multer for file upload handling
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Specify the folder where files will be stored
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    // Ensure unique filenames by appending timestamp to original file name
    cb(null, Date.now() + '-' + file.originalname);
  },
});

// Define the upload middleware with a size limit for the file (e.g., 5MB)
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit for file size
});

// POST route to create a new employee and upload their resume
router.post('/', protect, upload.single('resume'), async (req, res) => {
  const { fullName, email, phone, department, role, experience } = req.body;

  // Check if a file is uploaded
  if (!req.file) {
    return res.status(400).json({ error: 'Resume file is required' });
  }

  try {
    // Save the employee details along with the file path of the uploaded resume
    const employee = await Employee.create({
      fullName,
      email,
      phone,
      department,
      role,
      experience,
      resume: req.file.path,
    });

    res.status(201).json(employee); 
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
