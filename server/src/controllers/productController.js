import Product from '../models/Product.js';

const NO_KEY_ERROR_MESSAGE = 'Error: you need to specify a id';
const NOT_FOUND_ERROR_MESSAGE = 'Error: not found';

export const findById = async (req, res) => {
    if (req.params.id === '') {
        return res.status(404).send(NO_KEY_ERROR_MESSAGE);
    }
    
    try {
        const product = await Product.findOne({ _id: req.params.id }).orFail().exec();
        res.status(200).send(product);
    } catch (err) {
        console.log(err);
        res.status(404).send(NOT_FOUND_ERROR_MESSAGE);
    }
}

export const findLast = async (req, res) => {
    try {
        const products = await Product.find().sort({ field: 'asc', _id: -1 }).limit(1).orFail().exec();
        res.status(200).send(products[0]);
    } catch (err) {
        console.log(err);
        res.status(404).send(NOT_FOUND_ERROR_MESSAGE);
    }
}

export const findAll = async (req, res) => {
    try {
        const products = await Product.find().orFail().exec();
        res.status(200).send(products);
    } catch (err) {
        console.log(err);
        res.status(404).send(NOT_FOUND_ERROR_MESSAGE);
    }
}

export const create = async (req, res) => {
    const product = req.body;
    delete product._id;

    if (req.body.categories) {
        product.categories = JSON.parse(req.body.categories);
    }

    if (req.file && typeof req.file !== 'undefined') {
        product.image = req.file.path;
    }
    
    try {
        await Product.create(product);
        res.status(200).send();
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

export const update = async (req, res) => {
    if (req.params.id === '') {
        return res.status(404).send(NO_KEY_ERROR_MESSAGE);
    }

    const product = req.body;

    if (req.body.categories) {
        product.categories = JSON.parse(req.body.categories);
    }

    if (req.file && typeof req.file !== 'undefined') {
        product.image = req.file.path;
    }
    
    try {
        await Product.findOneAndUpdate({ _id: req.params.id }, product).orFail().exec();
        res.status(200).send();
    } catch (err) {
        console.log(err);
        res.status(404).send(`NOT_FOUND_ERROR_MESSAGE: ${err}`);
    }
}

export const remove = async (req, res) => {
    if (req.params.id === '') {
        return res.status(404).send(NO_KEY_ERROR_MESSAGE);
    }

    try {
        await Product.findOneAndRemove({ _id: req.params.id }).orFail().exec();
        res.status(200).send();
    } catch (err) {
        console.log(err);
        res.status(404).send(`NOT_FOUND_ERROR_MESSAGE: ${err}`);
    }
}