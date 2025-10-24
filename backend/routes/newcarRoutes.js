const express = require('express');
const pictureUploader = require('../middlewares/pictureToCloudinary');

const { getNewCar, postNewCar } = require('../controllers/newCarControllers');
const router = express.Router();

router.get('/', getNewCar);
router.post('/', pictureUploader, postNewCar);

module.exports = router;
