const { body } = require('express-validator');

exports.contactValidator = [
    body('name').notEmpty().withMessage('Name is required').trim().escape(),
    body('email').isEmail().withMessage('Valid email is required').normalizeEmail(),
    body('message').notEmpty().withMessage('Message is required').trim().escape()
];
