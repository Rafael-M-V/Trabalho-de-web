import http from 'http';
import mongoose from 'mongoose';
import 'dotenv/config';
import app from '../src/app.js';
import dbConnect from '../src/dbConnection.js';

const PORT = process.env['PORT'] || 3008;

app.set(PORT);
const server = http.createServer(app);

dbConnect();

mongoose.connection.once('open', () => {
    console.log('Established connection with MongoDB');
    server.listen(PORT);
    console.log('Listening on port:', PORT);
})

export default server;