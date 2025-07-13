const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    familiarity: { type: Number, required: true } // e.g., 0–100
});

const SkillsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    programmingLanguages: {
        type: [ItemSchema],
        required: true
    },
    frontend: {
        type: [ItemSchema],
        required: true
    },
    backend: {
        type: [ItemSchema],
        required: true
    },
    tools: {
        type: [ItemSchema],
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("Skill", SkillsSchema);