// ./routes/skillsRoutes.js
const express = require('express');
const router = express.Router();
const {
    getSkillsByUser,
    getMySkills,
    updateMySkills
} = require('../controllers/skills.controller');
const { verifyToken, roleCheck } = require('../middleware/authMiddleware');

// Public route
router.get('/:userId', getSkillsByUser);

// Authenticated user routes
router.get('/', verifyToken, getMySkills);
router.put('/update', verifyToken, roleCheck('admin', 'editor'), updateMySkills);

module.exports = router;