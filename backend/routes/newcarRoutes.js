const express = require('express');
const {
    getnewcar,
    postCarBackend,
    getAllUsersBackend,
    postUserBackend, 
    getOneUserBackend,
    deleteOneUserBackend,
    updateOneUserBackend,
} = require('../controllers/newcarControllers');

const router = express.Router();

router.get('/', getnewcar);
// router.get('/:id', getOneUserBackend);
// router.post('/', postCarBackend);
// router.put('/modosit/:id', updateOneUserBackend);
// router.delete('/torol/:id', deleteOneUserBackend);

module.exports = router;