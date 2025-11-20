import express from 'express';
const { deleteOneUserBackend, getAllUsersBackend, updateOneUserBackend } = 
	require( '../../controllers/users/usersControllersBackend.mjs');
const router = express.Router();

router.get('/', getAllUsersBackend);
router.put('/', updateOneUserBackend);
router.delete('/:id', deleteOneUserBackend);

module.export = router;
