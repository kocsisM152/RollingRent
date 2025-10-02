const express = require('express');
const {
    getAllUsersBackend,
    postUserBackend, 
    getOneUserBackend,
    deleteOneUserBackend,
    updateOneUserBackend,
} = require('../controllers/userControllersBackend');

const router = express.Router();

router.get('/', getAllUsersBackend);
router.get('/:id', getOneUserBackend);
router.post('/', postUserBackend);
router.put('/modosit/:id', updateOneUserBackend);
router.delete('/torol/:id', deleteOneUserBackend);

module.exports = router;