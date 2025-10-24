const express = require('express');
const {
    getSzuresCars,
    getSzuresAllCars,
} = require('../controllers/szuresCarsControllersBackend');
const router = express.Router();

router.get('/', getSzuresAllCars);
router.get('/:id', getSzuresCars);

module.exports = router;
