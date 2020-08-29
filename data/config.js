const knex = require("knex")
const knexfile = require("../knexfile")

modules.export = knex(knexfile)