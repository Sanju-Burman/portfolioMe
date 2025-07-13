const express = require('express');
const { registerUser, loginUser,
    getMyProfile, getAllUsers, updateRole } = require('../controllers/user.controller');
const { verifyToken, roleCheck } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', verifyToken, getMyProfile);
router.get('/users', verifyToken, roleCheck('admin'), getAllUsers);
router.put('/role', verifyToken, roleCheck('admin'), updateRole);

module.exports= router;