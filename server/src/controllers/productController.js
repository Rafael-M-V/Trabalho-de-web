import Product from '../models/Product.js';
import errMsg from './errorMessages.js';

export const findById = async (req, res) => {
    if (req.params.id === '') {
        return res.status(404).send(errMsg.NO_KEY);
    }
    
    try {
        const product = await Product.findOne({ _id: req.params.id }).orFail().exec();
        res.status(200).send(product);
    } catch (err) {
        console.log(err);
        res.status(404).send(errMsg.NOT_FOUND);
    }
}

export const findByName = async (req, res) => {
    if (req.body.name === '') {
        return res.status(404).send(errMsg.NO_KEY);
    }

    try {
        const product = await Product.find({ name: new RegExp(req.body.name, 'i') }).orFail().exec();
        console.log('searching for', req.body.name);
        res.status(200).send(product);
    } catch (err) {
        console.log(err);
        res.status(404).send(errMsg.NOT_FOUND);
    }
}

export const findByTags = async (req, res) => {
    if (req.body.tags === '') {
        return res.status(404).send(errMsg.NO_KEY);
    }
    
    try {
        const product = await Product.find({ tags: { $in: req.body.tags } }).orFail().exec();
        res.status(200).send(product);
    } catch (err) {
        console.log(err);
        res.status(404).send(errMsg.NOT_FOUND);
    }
}

export const findByCategories = async (req, res) => {
    if (req.body.categories === '') {
        return res.status(404).send(errMsg.NO_KEY);
    }
    
    try {
        const product = await Product.find({ categories: { $in: req.body.categories } }).orFail().exec();
        res.status(200).send(product);
    } catch (err) {
        console.log(err);
        res.status(404).send(errMsg.NOT_FOUND);
    }
}

export const findAll = async (req, res) => {
    try {
        const products = await Product.find().orFail().exec();
        res.status(200).send(products);
    } catch (err) {
        console.log(err);
        res.status(404).send(errMsg.NOT_FOUND);
    }
}

export const findOnSale = async (req, res) => {
    try {
        const products = await Product.find({ discount: { $gt: 0 } }).sort({ discount: 'desc' }).orFail().exec();
        res.status(200).send(products);
    } catch (err) {
        console.log(err);
        res.status(404).send(errMsg.NOT_FOUND);
    }
}

export const create = async (req, res) => {
    const product = req.body;
    delete product._id;

    if (req.body.categories) {
        product.categories = JSON.parse(req.body.categories);
    }
    
    if (req.body.tags) {
        product.tags = JSON.parse(req.body.tags);
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
        return res.status(404).send(errMsg.NO_KEY);
    }

    const product = req.body;
    console.log(req.body)

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
        res.status(404).send(`errMsg.NOT_FOUND: ${err}`);
    }
}

export const remove = async (req, res) => {
    if (req.params.id === '') {
        return res.status(404).send(errMsg.NO_KEY);
    }

    try {
        await Product.findOneAndRemove({ _id: req.params.id }).orFail().exec();
        res.status(200).send();
    } catch (err) {
        console.log(err);
        res.status(404).send(`errMsg.NOT_FOUND: ${err}`);
    }
}