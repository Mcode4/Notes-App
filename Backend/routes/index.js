const express = require('express');
const router = express.Router();

router.use('/home', require('./homeRouter'));
router.use('/space', require('./spaceRouter'));
