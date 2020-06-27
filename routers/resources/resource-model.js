const db = require("../../data/config");

function addResource(resource) {
    return db("resources").insert(resource);
}

function getResources() {
    return db("resources").select("*");
}

// function getShoppingList(recipe_id) {
//     return db("recipe_ingredient as ri")
//         .join("recipes as r", "r.id", "ri.recipe_id")
//         .join("ingredients as i", "i.id", "ri.ingredient_id")
//         .where("ri.recipe_id", recipe_id)
//         .select("r.name", "i.name", "ri.quantity");
// }

module.exports = {
    addResource,
    getResources,
};
