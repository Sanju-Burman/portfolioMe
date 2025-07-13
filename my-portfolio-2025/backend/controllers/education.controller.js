const Education = require('../models/Education');
const asyncHandler = require('express-async-handler');

// Get all education for a specific user (public)
exports.getEducationByUser = asyncHandler(async (req, res) => {
    const education = await Education.find({ user: req.params.userId });
    if (!education) return res.status(404).json({ message: 'Education not found' });
    res.json(education);
});

// Get logged-in user's education
exports.getMyEducation = asyncHandler(async (req, res) => {
    const education = await Education.find({ user: req.user._id });
    if (!education) return res.status(404).json({ message: 'Education not found' });
    res.json(education);
});

// Create education (admin/editor)
exports.createEducation = asyncHandler(async (req, res) => {
    const entry = new Education({ ...req.body, user: req.user._id });
    const saved = await entry.save();
    res.status(201).json(saved);
});

// Update specific education by ID
exports.updateEducation = asyncHandler(async (req, res) => {
    const entry = await Education.findOne({ _id: req.params.id, user: req.user._id });
    if (!entry) return res.status(404).json({ message: 'Education not found' });
    Object.assign(entry, req.body);
    const updated = await entry.save();
    res.json(updated);
});

// Delete specific education
exports.deleteEducation = asyncHandler(async (req, res) => {
    const entry = await Education.findOneAndDelete({ _id: req.params.id, user: req.user._id });
    if (!entry) return res.status(404).json({ message: 'Education not found' });
    res.json({ message: 'Education deleted successfully' });
});