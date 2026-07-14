require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.js');
const userRoutes = require('./routes/user.routes.js');
const aboutRoutes = require('./routes/about.routes.js');
const skillsRoutes = require('./routes/skills.routes.js');
const educationRoutes = require('./routes/education.routes.js');
const projectRoutes = require('./routes/project.routes.js');
const contactRoutes = require('./routes/contact.routes.js');

const app = express();
connectDB();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
    credentials: true,
}));
app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/about', aboutRoutes);
app.use('/api/skills', skillsRoutes);
app.use('/api/project', projectRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/contact', contactRoutes);

const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
