const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const router = require("./Router/Routerdata");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/", router);

const db_url =
  "mongodb+srv://ecommerce:123456abcd@cluster0.wav1d.mongodb.net/ecommerce?retryWrites=true&w=majority";

const Db_connection = async () => {
  try {
    await mongoose.connect(db_url, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db connected");
  } catch (error) {
    console.log("errorr");
  }
};
Db_connection();

PORT = 4000;
app.listen(PORT, () => {
  console.log(`server ${PORT}`);
});
