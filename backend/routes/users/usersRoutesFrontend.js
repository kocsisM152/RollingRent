const express = require('express');
const { updateOneUserKedvelemFrontend, getOneUserFrontend } = require('../../controllers/users/usersControllersFrontend');
const router = express.Router();

router.get('/:id', getOneUserFrontend);
router.patch('/:id', updateOneUserKedvelemFrontend);

module.exports = router;
