import mongoose from "mongoose";


const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(
      `MongoDB Connected: ${conn.connection.host}`
    );
  } catch (error) {
    console.log(`Error: ${error.message}`.red);
    process.exit(1);
  }
};

export default connectDB;