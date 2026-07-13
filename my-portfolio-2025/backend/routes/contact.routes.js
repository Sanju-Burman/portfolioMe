const express = require('express');
const { handleContact } = require('../controllers/contact.controller');
const validateRequest = require('../middleware/validationMiddleware');
const { contactValidator } = require('../validators/contactValidator');
const rateLimit = require('express-rate-limit');
const router = express.Router();

const contactLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 5, // limit each IP to 5 requests per windowMs
    message: 'Too many contact requests from this IP, please try again after an hour.'
});

router.post('/', contactLimiter, contactValidator, validateRequest, handleContact);

module.exports = router;