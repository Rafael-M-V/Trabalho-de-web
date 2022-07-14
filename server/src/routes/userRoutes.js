import express from 'express';
import * as userController from '../controllers/userController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/:id', auth.verify(auth.permissions.customer), userController.findById);
router.get('/', auth.verify(auth.permissions.admin), userController.findAll);
router.put('/:id', auth.verify(auth.permissions.customer), userController.update);
router.post('/', auth.verify(auth.permissions.any), userController.create);
router.delete('/:id', auth.verify(auth.permissions.admin), userController.remove);
router.post('/login', userController.login);

export default router;