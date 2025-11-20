const express = require('express');
const {
    loginUser,
} = require('../../controllers/users/userLoginControllers.js');
const router = express.Router();

router.post('/', loginUser);

module.exports = router;
