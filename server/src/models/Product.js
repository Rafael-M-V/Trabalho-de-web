import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: String,
    stockAmount: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    unit: {
        type: String,
        required: true,
    },
    discount: Number,
    description: String,
    categories: {
        type: Array,
        required: true
    }
});

export default mongoose.model('Product', productSchema);