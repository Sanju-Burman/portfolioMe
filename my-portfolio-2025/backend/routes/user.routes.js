const express = require('express');
const { registerUser, loginUser,
    getMyProfile, getAllUsers, updateRole } = require('../controllers/user.controller');
const { verifyToken, roleCheck } = require('../middleware/authMiddleware');
const validateRequest = require('../middleware/validationMiddleware');
const { registerValidator, loginValidator } = require('../validators/authValidator');
const rateLimit = require('express-rate-limit');
const router = express.Router();

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // limit each IP to 10 requests per windowMs
    message: 'Too many authentication attempts, please try again later.'
});

router.post('/register', authLimiter, registerValidator, validateRequest, registerUser);
router.post('/login', authLimiter, loginValidator, validateRequest, loginUser);
router.get('/me', verifyToken, getMyProfile);
router.get('/users', verifyToken, roleCheck('admin'), getAllUsers);
router.put('/role', verifyToken, roleCheck('admin'), updateRole);

module.exports = router;