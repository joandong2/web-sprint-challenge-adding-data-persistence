const db = require("../../data/config");

function addProject(project) {
    return db("projects").insert(project);
}

function getProjects() {
    return db("projects").select("*");
}

function getProjectResources(project_id) {
    return db("project_resources as pr")
        .join("projects as p", "p.id", "pr.project_id")
        .join("resources as r", "r.id", "pr.resource_id")
        .where("pr.project_id", project_id)
        .select(
            "r.name as Resource Name",
            "r.description as Resource Description"
        );
}

function getProjectTasks(project_id) {
    return db("tasks as t")
        .join("projects as p", "p.id", "t.project_id")
        .where("p.id", project_id)
        .select(
            "t.description as Task Description",
            "t.notes as Task Notes",
            "t.completed"
        );
}

module.exports = {
    addProject,
    getProjects,
    getProjectResources,
    getProjectTasks,
};
