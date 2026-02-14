const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

// Define routes
router.get("/", projectController.getProjects);
router.post("/", projectController.createProject);

module.exports = router;
