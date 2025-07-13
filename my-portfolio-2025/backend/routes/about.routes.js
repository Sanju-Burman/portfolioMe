const express = require('express');
const router = express.Router();
const { getAboutByUser, getMyAbout,
    updateMyAbout, addAboutByUser } = require('../controllers/about.controller');
const { verifyToken, roleCheck } = require('../middleware/authMiddleware');

// Public route to view any user's about section
router.get('/:userId', getAboutByUser);

// Authenticated user routes
router.post('/', verifyToken, addAboutByUser);
router.get('/', verifyToken, getMyAbout);
router.put('/update', verifyToken, roleCheck('admin', 'editor'), updateMyAbout);

module.exports = router;