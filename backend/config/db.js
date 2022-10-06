const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGO_URL;

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});
const connectMongoDB = async () => {
  await mongoose.connect(MONGO_URL);
};

module.exports = {connectMongoDB};
