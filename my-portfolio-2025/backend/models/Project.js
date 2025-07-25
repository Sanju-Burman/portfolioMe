const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    date: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    github: { type: String },
    deploy: { type: String },
    techStack: [String],
    isAvailable: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);