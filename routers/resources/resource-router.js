const express = require("express");
const Resources = require("./resource-model.js");
const router = express.Router();

router.post("/", async (req, res, next) => {
    if (!req.body.description || !req.body.name) {
        return res.status(400).json({
            message: "Missing post contents",
        });
    }

    Resources.addResource(req.body)
        .then((resource) => {
            //console.log(ingredients);
            res.status(201).json(resource);
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to insert new resource" });
        });
});

router.get("/", async (req, res, next) => {
    Resources.getResources()
        .then((resources) => {
            res.json(resources);
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to get resources" });
        });
});

module.exports = router;
