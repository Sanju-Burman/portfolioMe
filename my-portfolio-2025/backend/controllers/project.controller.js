const Project = require('../models/Project');
const asyncHandler = require('express-async-handler');

// Whitelisted mutable fields for security against mass assignment
const ALLOWED_PROJECT_FIELDS = [
    'title', 'shortTitle', 'category', 'date', 'icon',
    'description', 'image', 'images', 'github', 'deploy',
    'techStack', 'specs'
];

// Get all projects for a specific user (public)
exports.getProjectsByUser = asyncHandler(async (req, res) => {
    const userId = req.params?.userId;
    const projects = await Project.find({ user: userId, isAvailable: true });
    res.json(projects || []);
});

// Get authenticated user's projects
exports.getMyProjects = asyncHandler(async (req, res) => {
    const projects = await Project.find({ user: req?.user?._id, isAvailable: true });
    res.json(projects || []);
});

// Create a new project for authenticated user
exports.createProject = asyncHandler(async (req, res) => {
    const safeData = {};
    ALLOWED_PROJECT_FIELDS.forEach(field => {
        if (req.body[field] !== undefined) safeData[field] = req.body[field];
    });

    const newProject = new Project({
        ...safeData,
        user: req.user?._id
    });
    const saved = await newProject.save();
    res.status(201).json(saved);
});

// Update an existing project by ID (only if owner)
exports.updateProject = asyncHandler(async (req, res) => {
    const project = await Project.findOne({ _id: req.params?.id, user: req.user?._id });
    if (!project) return res.status(404).json({ message: 'Project not found' });

    ALLOWED_PROJECT_FIELDS.forEach(field => {
        if (req.body[field] !== undefined) project[field] = req.body[field];
    });

    const updated = await project.save();
    res.json(updated);
});

// Soft delete a project by ID (only if owner)
exports.deleteProject = asyncHandler(async (req, res) => {
    const project = await Project.findOne({ _id: req.params?.id, user: req.user?._id });
    if (!project) return res.status(404).json({ message: 'Project not found' });
    project.isAvailable = false;
    await project.save();
    res.json({ message: 'Project deleted successfully', projectId: project._id });
});