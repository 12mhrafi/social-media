const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const AuthRoute = require("./Routes/AuthRoute")

require("dotenv").config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// ROUTES

app.use("/auth", AuthRoute);

// mongoDB connect
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URL);
    if (connect) {
      console.log("Connected to mongoDB ");
    }
  } catch(error) {
    console.log("connection error", error);
  }
};


// listen server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  connectDB();
  console.log(`Server is running at http://localhost:${port}`);
});
