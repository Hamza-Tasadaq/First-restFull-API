const mongoose = require("mongoose");

const conectToDatabase = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/olympics", {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("SuccessFully Connected To Database");
  } catch (error) {
    console.log("Error in connecting to database");
  }
};

conectToDatabase();
