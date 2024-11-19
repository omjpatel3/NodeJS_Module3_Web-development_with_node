const express = require('express');
const router = express.Router();
const timeController = require('../controllers/timeController');

// Route to display the world clock
router.get('/', timeController.getWorldTime);

module.exports = router;
