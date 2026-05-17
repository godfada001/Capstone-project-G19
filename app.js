const dns = require("node:dns")
dns.setServers(['1.1.1.1','8.8.8.8'])
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// MIDDLEWARE
app.use(express.json());

// ROUTES
const userRoute = require("./route/userRoute");
const jobRoute = require("./route/jobRoute");

app.use("/api/users", userRoute);
app.use("/api/jobs", jobRoute);


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