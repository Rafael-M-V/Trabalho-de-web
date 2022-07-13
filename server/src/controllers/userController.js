import User from '../models/User.js';
import err from './errorMessages.js';

export const findByEmail = async (req, res) => {
    if (req.params.email === '') {
        return res.status(404).send(err.NO_KEY_ERROR_MESSAGE);
    }
    
    try {
        const user = await User.findOne({ email: req.params.email }).orFail().exec();
        res.status(200).send(user);
    } catch (err) {
        console.log(err);
        res.status(404).send(err.NOT_FOUND_ERROR_MESSAGE);
    }
}

export const findAll = async (req, res) => {
    try {
        const users = await User.find().orFail().exec();
        res.status(200).send(users);
    } catch (err) {
        console.log(err);
        res.status(404).send(err.NOT_FOUND_ERROR_MESSAGE);
    }
}

export const create = async (req, res) => {
    const user = req.body;
    delete user._id;
    
    try {
        await User.create(user);
        res.status(200).send();
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

export const update = async (req, res) => {
    if (req.params.email === '') {
        return res.status(404).send(err.NO_KEY_ERROR_MESSAGE);
    }

    const user = req.body;
    
    try {
        await User.findOneAndUpdate({ email: req.params.email }, user).orFail().exec();
        res.status(200).send();
    } catch (err) {
        console.log(err);
        res.status(404).send(`err.NOT_FOUND_ERROR_MESSAGE: ${err}`);
    }
}

export const remove = async (req, res) => {
    if (req.params.email === '') {
        return res.status(404).send(err.NO_KEY_ERROR_MESSAGE);
    }

    try {
        await User.findOneAndRemove({ email: req.params.email }).orFail().exec();
        res.status(200).send();
    } catch (err) {
        console.log(err);
        res.status(404).send(`err.NOT_FOUND_ERROR_MESSAGE: ${err}`);
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password)  {
        return res.status(404).send(err.NO_KEY_LOGIN_ERROR_MESSAGE);
    }

    try {
        await User.findOne({ email: email, password: password }).orFail().exec();
        res.status(200).send();
    } catch (err) {
        console.log(err);
        res.status(404).send(`err.NOT_FOUND_ERROR_MESSAGE: ${err}`)
    }
}