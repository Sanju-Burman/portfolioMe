const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: { type: String },
    aboutMe: { type: String },
    resumeLink: { type: String },
    socials: {
        linkedin: { type: String },
        github: { type: String },
        twitter: { type: String },
        email: { type: String },
        phone: { type: String }
    }
}, { timestamps: true });

module.exports = mongoose.model('About', AboutSchema);