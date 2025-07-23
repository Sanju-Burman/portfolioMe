// ./controller/contect.controller.js
const Contact = require('../models/Contact.js');
const { sendEmail } = require('../utils/sendEmail.js');
const asyncHandler = require("express-async-handler")

const handleContact = asyncHandler(async (req, res) => {
    const { name, email, message, userEmail, userId } = req.body;

    // Basic validation
    if (!name || !email || !message || !userEmail || !userId) {
        return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    try {
        // Save contact to database with user id
        const contact = await Contact.create({ name, email, message, userEmail, userId });

        // Send email notification
        await sendEmail({ name, email, message, userEmail });

        res.status(200).json({ success: true, message: 'Message sent successfully.' });
    } catch (err) {
        console.error('Contact submission error:', err);
        res.status(500).json({ success: false, message: 'Failed to send message. Please try again later.' });
    }
});

module.exports = { handleContact };