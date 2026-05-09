const express = require("express");

const router = express.Router();

const {
  registerUser,
  loginUser,
  getUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../controller/userController.js");

// REGISTER USER
router.post("/register", registerUser);

// LOGIN USER
router.post("/login", loginUser);

// GET ALL USERS
router.get("/", getUsers);

// GET SINGLE USER
router.get("/:id", getSingleUser);

// UPDATE USER
router.put("/:id", updateUser);

// DELETE USER
router.delete("/:id", deleteUser);

module.exports = router;