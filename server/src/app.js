import express from 'express';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/public', express.static('public'));
app.use('/api/products', productRoutes);

export default app;