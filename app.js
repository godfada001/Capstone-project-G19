const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// MIDDLEWARE
app.use(express.json());

// ROUTES
const userRoute = require("./route/userRoute");

app.use("/api/users", userRoute);

// DATABASE CONNECTION
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(process.env.PORT || 7000, () => {
      console.log("Server Running");
    });
  })
  .catch((error) => console.log(error));