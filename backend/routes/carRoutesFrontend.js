const express = require('express');

const { getAllCarsFrontend, updateOneCarFrontend } = require('../controllers/carControllersFrontend');

const router = express.Router();

router.get('/', getAllCarsFrontend);
router.patch('/:id', updateOneCarFrontend);

module.exports = router;
