const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db.js');
const userRoutes = require('./routes/user.routes.js');
const aboutRoutes = require('./routes/about.routes.js');
const skillsRoutes = require('./routes/skills.routes.js');
// const contactRoutes = require('./routes/contact.routes.js');

const app = express();
dotenv.config();
connectDB();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/about', aboutRoutes);
app.use('/api/skills', skillsRoutes);
// app.use('/api/contact', contactRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
