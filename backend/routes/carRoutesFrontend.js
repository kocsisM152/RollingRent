const express = require('express');

const { getAllCarsFrontend } = require('../controllers/carControllersFrontend');

const router = express.Router();

router.get('/', getAllCarsFrontend);

module.exports = router;
