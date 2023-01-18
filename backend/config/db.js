const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGO_URI,

      { useNewUrlParser: true },
      mongoose.set("strictQuery", true)
    );
    console.log(
      `Mongo db connected: this is the ${process.env.NODE_ENV} version ${conn.connection.host}`
        .cyan.underline
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
