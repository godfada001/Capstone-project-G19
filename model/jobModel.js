const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Job title is required"],
      trim: true,
      minlength: 5,
      maxlength: 100,
    },

    description: {
      type: String,
      required: [true, "Job description is required"],
      minlength: 20,
    },

    category: {
      type: String,
      required: [true, "Job category is required"],
      enum: [
        "Web Development",
        "Mobile Development",
        "UI/UX Design",
        "Graphic Design",
        "Writing",
        "Data Analysis",
        "Cybersecurity",
      ],
    },

    budget: {
      type: Number,
      required: [true, "Budget is required"],
      min: [1, "Budget must be greater than 0"],
    },

    deadline: {
      type: Date,
      required: [true, "Deadline is required"],
    },

    skillsRequired: {
      type: [String],
      default: [],
    },

    status: {
      type: String,
      enum: ["open", "in-progress", "completed", "closed"],
      default: "open",
    },

    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Job", jobSchema);