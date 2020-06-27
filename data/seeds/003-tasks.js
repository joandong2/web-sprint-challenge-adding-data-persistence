exports.seed = async function (knex) {
    await knex("tasks").insert([
        {
            description: "assemble HP printer",
            notes: "insert ink cartridge",
            completed: false,
            project_id: 1,
        },
        {
            description: "beat eggs",
            notes: "5 eggs",
            completed: true,
            project_id: 2,
        },
        {
            description: "answer assignment",
            notes: "chapter IV",
            completed: true,
            project_id: 4,
        },
    ]);
};
