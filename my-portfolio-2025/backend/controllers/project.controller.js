const Project = require('../models/Project');
const asyncHandler = require('express-async-handler');

// Get all projects for a specific user (public)
exports.getProjectsByUser = asyncHandler(async (req, res) => {
    const userId = req.params?.userId;
    const projects = await Project.find({ user: userId, isAvailable: true });
    if (!projects) return res.status(404).json({ message: 'Projects not found' });
    res.json(projects);
});

// Get authenticated user's projects
exports.getMyProjects = asyncHandler(async (req, res) => {
    const projects = await Project.find({ user: req?.user?._id, isAvailable: true });
    if (!projects) return res.status(404).json({ message: 'Projects not found' });
    res.json(projects);
});

// Create a new project for authenticated user
exports.createProject = asyncHandler(async (req, res) => {
    const newProject = new Project({
        ...req.body,
        user: req.user?._id
    });
    const saved = await newProject.save();
    res.status(201).json(saved);
});

// Update an existing project by ID (only if owner)
exports.updateProject = asyncHandler(async (req, res) => {
    const project = await Project.findOne({ _id: req.params?.id, user: req.user?._id });
    if (!project) return res.status(404).json({ message: 'Project not found' });
    Object.assign(project, req.body); // shallow copy, cloning object
    const updated = await project.save();
    res.json(updated);
});

// Delete a project by ID (only if owner)
// this not good prectice, so make isAvailable field, in this way we do 
// not delete anything 
exports.deleteProject = asyncHandler(async (req, res) => {
    const project = await Project.findOne({ _id: req.params?.id, user: req.user?._id });
    if (!project) return res.status(404).json({ message: 'Project not found' });
    Object.assign(project, { isAvailable: false }); // shallow copy, cloning object
    await project.save();
    res.json({ message: 'Project deleted successfully', projectId: project._id });
});