const express = require('express');
const router = express.Router();
const { getEducationByUser, getMyEducation,
    createEducation, updateEducation, deleteEducation } = require('../controllers/education.controller');
const { verifyToken, roleCheck } = require('../middleware/authMiddleware');

// Public
router.get('/:userId', getEducationByUser);

// Authenticated
router.get('/', verifyToken, getMyEducation);
router.post('/', verifyToken, roleCheck('admin', 'editor'), createEducation);
router.put('/:id', verifyToken, roleCheck('admin', 'editor'), updateEducation);
router.delete('/:id', verifyToken, roleCheck('admin', 'editor'), deleteEducation);

module.exports = router;