const express = require('express');
const {
    getAllCarsBackend,
    getAllUsersBackend,
    postUserBackend, 
    getOneUserBackend,
    deleteOneUserBackend,
    updateOneUserBackend,
} = require('../controllers/carControllersBackend');

const router = express.Router();

router.get('/', getAllCarsBackend);
// router.get('/:id', getOneUserBackend);
// router.post('/', postUserBackend);
// router.put('/modosit/:id', updateOneUserBackend);
// router.delete('/torol/:id', deleteOneUserBackend);

module.exports = router;