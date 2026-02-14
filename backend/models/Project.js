const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  techStack: [{ type: String }], // Array of strings like ["React", "Node"]
  githubLink: { type: String },
  liveLink: { type: String },
  image: { type: String }, // URL to image
});

module.exports = mongoose.model("Project", projectSchema);
