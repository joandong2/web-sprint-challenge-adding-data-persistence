const express = require("express");
const Tasks = require("./task-model.js");
const router = express.Router();

router.post("/", async (req, res, next) => {
    if (!req.body.description) {
        return res.status(400).json({
            message: "Missing post contents",
        });
    }

    Tasks.addTask(req.body)
        .then((task) => {
            //console.log(ingredients);
            res.status(201).json(task);
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to insert new task" });
        });
});

router.get("/", async (req, res, next) => {
    Tasks.getTasks()
        .then((tasks) => {
            res.json(tasks);
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to get tasks" });
        });
});

module.exports = router;
