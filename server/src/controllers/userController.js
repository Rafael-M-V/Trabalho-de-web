import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import errMsg from './errorMessages.js';
import auth from '../middleware/auth.js';

export const findById = async (req, res) => {
    if (req.params.id === '') {
        return res.status(404).send(errMsg.NO_KEY);
    }
    
    try {
        const user = await User.findOne({ _id: req.params.id }).orFail().exec();
        res.status(200).send(user);
    } catch (err) {
        console.log(err);
        res.status(404).send(errMsg.NOT_FOUND);
    }
}

export const findAll = async (req, res) => {
    try {
        const users = await User.find().orFail().exec();
        res.status(200).send(users);
    } catch (err) {
        console.log(err);
        res.status(404).send(errMsg.NOT_FOUND);
    }
}

export const create = async (req, res) => {
    const user = req.body;
    delete user._id;

    if (req.body.role === auth.permissions.admin && (!req.user.role || req.user.role !== auth.permissions.admin)) {
        return res.status(403).send(errMsg.FORBIDDEN);
    }
    
    try {
        const hash = await bcrypt.hash(req.body.password, 10);
        user.password = hash;
        await User.create(user);
        res.status(200).send();
    } catch (err) {
        console.log(err);

        if (err.code == 11000) {
            res.status(400).send(errMsg.DUPLICATE_KEY)
        } else {
            res.status(500).send(err);
        }
    }
}

export const update = async (req, res) => {
    if (req.params.id === '') {
        return res.status(404).send(errMsg.NO_KEY);
    }

    const user = req.body;
    
    try {
        await User.findOneAndUpdate({ _id: req.params.id }, user).orFail().exec();
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
        await User.findOneAndRemove({ _id: req.params.id }).orFail().exec();
        res.status(200).send();
    } catch (err) {
        console.log(err);
        res.status(404).send(`errMsg.NOT_FOUND: ${err}`);
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password)  {
        return res.status(404).send(errMsg.NO_KEY_LOGIN);
    }

    try {
        const user = await User.findOne({ email: email }).orFail().exec();
        if (await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ _id: user._id, email: user.email, role: user.role }, process.env['JWT_KEY'], { expiresIn: '1h' });
            res.status(200).send({ token: token });
        } else {
            throw new Error();
        }
    } catch (err) {
        console.log(err);
        res.status(403).send(errMsg.FORBIDDEN);
    }
}