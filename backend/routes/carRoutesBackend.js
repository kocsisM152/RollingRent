const express = require('express');
const pictureDeleter = require('../middlewares/pictureDeleteFromCloudinary');

const {
    getAllCarsBackend,
    postCarBackend,
    getOneCarBackend,
    deleteOneCarBackend,
    updateOneCarBackend,
} = require('../controllers/carControllersBackend');

const router = express.Router();

router.get('/', getAllCarsBackend);
router.get('/:id', getOneCarBackend);
router.post('/', postCarBackend);
router.put('/:id', updateOneCarBackend);
router.delete('/:id', pictureDeleter, deleteOneCarBackend);

module.exports = router;
