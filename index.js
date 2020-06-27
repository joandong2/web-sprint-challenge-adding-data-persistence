const express = require("express");
const resourceRouter = require("./routers/resources/resource-router");
const projectRouter = require("./routers/projects/project-router");
const taskRouter = require("./routers/tasks/task-router");

const server = express();
const port = process.env.PORT || 4000;

server.use(express.json());

server.use("/resources", resourceRouter);
server.use("/projects", projectRouter);
server.use("/tasks", taskRouter);

server.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        message: "Something went wrong",
    });
});

server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`);
});
