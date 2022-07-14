import express from 'express';
import * as productController from '../controllers/productController.js';
import upload from '../middleware/uploadImage.js';

const router = express.Router();

router.get('/:id', productController.findById);
router.get('/', productController.findAll);
router.post('/', upload.single('newImage'), productController.create);
router.put('/:id', upload.single('newImage'), productController.update);
router.delete('/:id', productController.remove);

export default router;