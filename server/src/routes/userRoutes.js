import express from 'express';
import * as userController from '../controllers/userController.js';

const router = express.Router();

router.get('/:email', userController.findByEmail);
router.get('/', userController.findAll);
router.put('/:email', userController.update);
router.post('/', userController.create);
router.delete('/:email', userController.remove);
router.post('/login', userController.login);

export default router;