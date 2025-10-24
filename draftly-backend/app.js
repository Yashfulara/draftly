require("dotenv").config();
const express = require("express");
const connect = require("./db/connect");

const app = express();

const PORT = process.env.PORT || 8080;

const start = async () => {
  try {
    await connect(process.env.MONGODB_URL);
    console.log("Connect to the database Successfully...");
    app.listen(PORT, () =>
      console.log(`Server is Listening to PORT ${PORT}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();