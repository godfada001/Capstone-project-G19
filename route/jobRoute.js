const express = require("express");

const router = express.Router();

const {
  createJob,
  getAllJobs,
  getSingleJob,
  updateJob,
  deleteJob,
} = require("../controller/jobController");




// GET all jobs & CREATE a job
router
  .route("/")
  .get(getAllJobs)
  .post(createJob);


// GET single job, UPDATE job, DELETE job
router
  .route("/:id")
  .get(getSingleJob)
  .put(updateJob)
  .delete(deleteJob);

module.exports = router;