// ./controller/contect.controller.js
const Contact = require('../models/Contact.js');
const { sendEmail } = require('../utils/sendEmail.js');
const asyncHandler = require("express-async-handler")
const User = require('../models/User');

const handleContact = asyncHandler(async (req, res) => {
    let { name, email, message, userEmail, userId } = req.body;

    // Use default receiver email if not provided by frontend
    if (!userEmail) {
        userEmail = process.env.MY_RECEIVER_EMAIL;
    }

    // Try to lookup default admin user if userId is missing
    if (!userId) {
        const adminUser = await User.findOne({ role: 'admin' });
        if (adminUser) {
            userId = adminUser._id;
        } else {
             return res.status(400).json({ success: false, message: 'Admin user not found. Please provide userId.' });
        }
    }

    if (!userEmail) {
        return res.status(400).json({ success: false, message: 'No receiver email specified.' });
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