const db = require("../../data/config");

function addTask(task) {
    return db("tasks").insert(task);
}

function getTasks() {
    return db("tasks as t")
        .join("projects as p", "p.id", "t.project_id")
        .select(
            "p.name as Project Name",
            "p.description as Project Description",
            "t.description as Task Descriptions",
            "t.notes as Task Notes",
            "t.completed"
        );
}

// function getShoppingList(recipe_id) {
//     return db("recipe_ingredient as ri")
//         .join("recipes as r", "r.id", "ri.recipe_id")
//         .join("ingredients as i", "i.id", "ri.ingredient_id")
//         .where("ri.recipe_id", recipe_id)
//         .select("r.name", "i.name", "ri.quantity");
// }

module.exports = {
    addTask,
    getTasks,
};
