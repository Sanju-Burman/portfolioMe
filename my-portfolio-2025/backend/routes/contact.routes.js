const express = require('express');
const { handleContact } = require('../controllers/contact.controller');
const router = express.Router();

router.post('/', handleContact);

module.exports= router;