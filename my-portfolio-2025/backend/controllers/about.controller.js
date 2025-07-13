const About = require('../models/About');
const asyncHandler = require('express-async-handler');

exports.getAboutByUser = asyncHandler(async (req, res) => {
    const userId = req.params?.userId;
    const data = await About.findOne({ user: userId });
    if (!data) return res.status(404).json({ message: 'About not found' });
    res.json(data);
});

exports.addAboutByUser = asyncHandler(async (req, res) => {
    const {
        userId,
        name,
        image,
        aboutMe,
        resumeLink,
        socials
    } = req.body;
    if (!userId || !name) {
        return res.status(400).json({ message: 'userId and name are required' });
    }

    // Check if About already exists for this user
    const existing = await About.findOne({ user: userId });
    if (existing) {
        return res.status(409).json({ message: 'About section already exists for this user' });
    }

    // Create new About document
    const about = await About.create({
        user: userId,
        name,
        image,
        aboutMe,
        resumeLink,
        socials
    });
    res.status(201).json({ message: 'About section created successfully', data: about });
});

exports.getMyAbout = asyncHandler(async (req, res) => {
    const data = await About.findOne({ user: req?.user?._id });
    if (!data) return res.status(404).json({ message: 'About not found' });
    res.json(data);
});

exports.updateMyAbout = asyncHandler(async (req, res) => {
    const userId = req?.user?._id;
    if (!userId) {
        return res.status(401).json({ message: 'Unauthorized: User ID missing' });
    }
    
    // console.log(req?.user);
    // Build update object from provided fields only
    const allowedFields = ['name', 'image', 'aboutMe', 'resumeLink', 'socials'];
    const updateData = {};

    allowedFields.forEach(field => {
        if (req.body[field] !== undefined) {
            updateData[field] = req.body[field];
        }
    });

    // Always ensure user field is set
    updateData.user = userId;
    // console.log(updateData);
    const updated = await About.findOneAndUpdate(
        { user: userId },
        { $set: updateData },
        { new: true, upsert: true }
    );

    res.json({ message: 'About section updated successfully', data: updated });
});
