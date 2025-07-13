// ./controllers/skillsController.js
const Skills = require('../models/Skills');
const asyncHandler = require('express-async-handler');

// GET skills for any user (public)
exports.getSkillsByUser = asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    const skills = await Skills.findOne({ user: userId });
    if (!skills) return res.status(404).json({ message: 'Skills not found' });
    res.json(skills);
});

// GET authenticated user's skills
exports.getMySkills = asyncHandler(async (req, res) => {
    const skills = await Skills.findOne({ user: req.user._id });
    if (!skills) return res.status(404).json({ message: 'Skills not found' });
    res.json(skills);
});

// PUT (update/create) skills for self
exports.updateMySkills = asyncHandler(async (req, res) => {
    const updated = await Skills.findOneAndUpdate(
        { user: req.user._id },
        { ...req.body, user: req.user._id },
        { new: true, upsert: true }
    );
    res.json(updated);
});