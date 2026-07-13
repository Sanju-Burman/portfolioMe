const { body } = require('express-validator');

exports.registerValidator = [
    body('username').notEmpty().withMessage('Username is required').trim(),
    body('email').isEmail().withMessage('Valid email is required').normalizeEmail(),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('role').optional().isIn(['admin', 'editor', 'viewer']).withMessage('Invalid role')
];

exports.loginValidator = [
    body('email').isEmail().withMessage('Valid email is required').normalizeEmail(),
    body('password').notEmpty().withMessage('Password is required')
];
