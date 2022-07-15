import express from 'express';
import * as productController from '../controllers/productController.js';
import auth from '../middleware/auth.js';
import upload from '../middleware/uploadImage.js';

const router = express.Router();

router.get('/on-sale', productController.findOnSale);
router.get('/:id', productController.findById);
router.get('/', productController.findAll);

router.post('/search', productController.findByName);
router.post('/tags', productController.findByTags);
router.post('/categories', productController.findByCategories);
router.post('/', auth.verify(auth.permissions.admin), upload.single('newImage'), productController.create);

router.put('/:id', auth.verify(auth.permissions.admin), upload.single('newImage'), productController.update);

router.delete('/:id', auth.verify(auth.permissions.admin), productController.remove);

export default router;