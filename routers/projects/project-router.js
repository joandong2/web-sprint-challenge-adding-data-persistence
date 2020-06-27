const express = require("express");
const Projects = require("./project-model.js");
const router = express.Router();

router.post("/", async (req, res, next) => {
    if (!req.body.name || !req.body.description) {
        return res.status(400).json({
            message: "Missing post contents",
        });
    }

    Projects.addProject(req.body)
        .then((project) => {
            res.status(201).json(project);
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to insert new project" });
        });
});

router.get("/", async (req, res, next) => {
    Projects.getProjects()
        .then((projects) => {
            res.json(projects);
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to get projects" });
        });
});

router.get("/:id/resources", async (req, res, next) => {
    Projects.getProjectResources(req.params.id)
        .then((project) => {
            res.json(project);
        })
        .catch((err) => {
            res.status(500).json({
                message: "Failed to get project resources",
            });
        });
});

router.get("/:id/tasks", async (req, res, next) => {
    Projects.getProjectTasks(req.params.id)
        .then((project) => {
            res.json(project);
        })
        .catch((err) => {
            res.status(500).json({
                message: "Failed to get project resources",
            });
        });
});

module.exports = router;
