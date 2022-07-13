import express from 'express';
import * as userController from '../controllers/userController.js';


const router = express.Router();

router.get('/:name', userController.findByName);
router.get('/', userController.findAll);
router.put('/:name', userController.update);
router.post('/', userController.create);
router.delete('/:name', userController.remove);

router.post('/',)

export default router;