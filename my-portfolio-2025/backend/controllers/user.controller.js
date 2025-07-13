const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/User');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

exports.registerUser = asyncHandler(async (req, res) => {
    const { username, email, password, role } = req.body;
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: 'Email already registered' });

    const user = await User.create({ username, email, password, role });
    const token = generateToken(user._id);
    res.status(201).json({
        user: { id: user._id, username, email, role },
        token
    });
});

exports.loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = generateToken(user._id);
    res.json({ user: { id: user._id, username: user.username, role: user.role }, token });
});

exports.getMyProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req?.user._id).select('-password');
    res.json(user);
});

exports.getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find().select('-password');
    res.json(users);
});

exports.updateRole = asyncHandler(async (req, res) => {
    const { id, role } = req.body;
    const user = await User.findByIdAndUpdate(id, { role }, { new: true });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
});