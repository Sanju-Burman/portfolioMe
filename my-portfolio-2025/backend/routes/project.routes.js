const express = require('express');
const router = express.Router();
const {getProjectsByUser,getMyProjects,
    createProject,updateProject,
    deleteProject} = require('../controllers/project.controller');
const { verifyToken, roleCheck } = require('../middleware/authMiddleware');

// Public route
router.get('/:userId', getProjectsByUser);

// Authenticated user routes
router.get('/', verifyToken, getMyProjects);
router.post('/', verifyToken, roleCheck('admin', 'editor'), createProject);
router.put('/:id', verifyToken, roleCheck('admin', 'editor'), updateProject);
router.patch('/:id', verifyToken, roleCheck('admin', 'editor'), deleteProject);

module.exports = router;