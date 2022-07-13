import Users from "../models/Users";

const NO_KEY_ERROR_MESSAGE = 'Error: you need to specify a id';
const NOT_FOUND_ERROR_MESSAGE = 'Error: not found';

export const findByName = async (req, res) => {
    if (req.params.name === '') {
        return res.status(404).send(NO_KEY_ERROR_MESSAGE);
    }
    
    try {
        const user = await Users.findOne({ _name: req.params.name }).orFail().exec();
        res.status(200).send(user);
    } catch (err) {
        console.log(err);
        res.status(404).send(NOT_FOUND_ERROR_MESSAGE);
    }
}

export const findAll = async (req, res) => {
    try {
        const users = await Users.find().orFail().exec();
        res.status(200).send(users);
    } catch (err) {
        console.log(err);
        res.status(404).send(NOT_FOUND_ERROR_MESSAGE);
    }
}

export const create = async (req, res) => {
    const user = req.body;
    delete user._name;
    
    try {
        await Users.create(user);
        res.status(200).send();
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

export const update = async (req, res) => {
    if (req.params.name === '') {
        return res.status(404).send(NO_KEY_ERROR_MESSAGE);
    }

    const user = req.body;
    
    try {
        await Users.findOneAndUpdate({ _name: req.params.name }, user).orFail().exec();
        res.status(200).send();
    } catch (err) {
        console.log(err);
        res.status(404).send(`NOT_FOUND_ERROR_MESSAGE: ${err}`);
    }
}

export const remove = async (req, res) => {
    if (req.params.name === '') {
        return res.status(404).send(NO_KEY_ERROR_MESSAGE);
    }

    try {
        await Users.findOneAndRemove({ _name: req.params.name }).orFail().exec();
        res.status(200).send();
    } catch (err) {
        console.log(err);
        res.status(404).send(`NOT_FOUND_ERROR_MESSAGE: ${err}`);
    }
}

export const login = async (req, res) => {

    const [email, password] = req.body;
    try{
        await Users.findOne({_email: email, _password: password}).orFail().exec();
        res.status(200).send();
    } catch (err) {
        console.log(err);
        res.status(404).send(`NOT_FOUND_ERROR_MESSAGE: ${err}`)
    }
}