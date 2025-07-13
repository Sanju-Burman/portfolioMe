const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    duration: { type: String, required: true },
    institute: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Education', educationSchema);