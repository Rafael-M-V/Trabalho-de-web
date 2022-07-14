import mongoose from 'mongoose';

const secret = process.env['MONGO_URI'];

const dbConnect = async() => {
  try {
    await mongoose.connect(secret, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  } catch (err) {
    console.log('Connection error:', err);
  }
}

export default dbConnect;