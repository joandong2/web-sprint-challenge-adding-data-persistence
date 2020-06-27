exports.seed = async function (knex) {
    await knex("resources").insert([
        {
            name: "HP Printer",
            description: "for printing",
        },
        {
            name: "Baking pan",
            description: "Baking 101",
        },
        {
            name: "Mixer",
            description: "Baking 101",
        },
        {
            name: "Books",
            description: "Programming Books",
        },
    ]);
};
