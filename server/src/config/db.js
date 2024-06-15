import mongoose from "mongoose";
import colors from "colors";

const DB_NAME = "chat_data";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);

    console.log(
      `MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (error) {
    // console.log(`Error: ${error.message}`);
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};

export default connectDB;
