
exports.up = async function(knex) {
    await knex.schema.createTable("projects", (table) => {
        table.increments("id")
        table.text("name").notNull().unique()
        table.text("description", 256)
        table.boolean("complete").notNull().defaultTo(false)
    })

    await knex.schema.createTable("tasks", (table) => {
        table.increments("id")
        table.text("description", 256).notNull()
        table.text("notes")
        table.boolean("completed").notNull().defaultTo(false)
        table.integer("project_id").notNull().references("id").inTable("projects")
    })

    await knex.schema.createTable("resources", (table) => {
        table.increments("id")
        table.text("name").notNull().unique()
        table.text("description", 256)
    })

    await knex.schema.createTable("projects_resources", (table) => {
        table.integer("project_id").references("id").inTable("projects").notNull()
        table.integer("resource_id").references("id").inTable("resources").notNull()
        table.primary(["project_id", "resource_id"])
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("projects_resources")
    await knex.schema.dropTableIfExists("resources")
    await knex.schema.dropTableIfExists("tasks")
    await knex.schema.dropTableIfExists("projects")
};
