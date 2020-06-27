exports.seed = async function (knex) {
    await knex("projects").insert([
        {
            name: "Test Project",
            description: "Testing API using react and node",
            completed: false,
        },
        {
            name: "Baking 101",
            description: "Baking 101",
            completed: true,
        },
        {
            name: "Automotive",
            description: "Automotive 101",
            completed: false,
        },
        {
            name: "Java Fundamentals",
            description: "Programming",
            completed: true,
        },
    ]);
};
