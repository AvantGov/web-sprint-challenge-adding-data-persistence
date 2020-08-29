const express = require("express");
const knex = require("knex");

const database_access = require("../data/config");

const router = express.Router();

// * get all resources
router.get("/resources", async (req, res, next) => {
    try {
        const resources = await database_access
            .select("*")
            .from("resources")
        res.status(201).json(resources)
    } catch(error) { 
        next(error) 
    }
})

// * add new resource
router.post("/resources", async (req, res, next) => {
    try {
        const resource = await database_access
            .insert({
                name: req.body.name,
                description: req.body.description
            })
            .into("resources")
        res.status(204).json(resource)
    } catch(error) { 
        next(error) 
    }
})

// * get all projects
router.get("/projects", async (req, res, next) => {
    try {
        const projects = await database_access
            .select("*")
            .from("projects")
        res.status(200).json(projects)
    } catch(error) { 
        next(error) 
    }
})

// * add new project
router.post("/projects", async (req, res, next) => {
    try {
        const project = await database_access
            .insert({
                id: Math.random(),
                name: req.body.name,
                description: req.body.description
            })
            .into("projects")
        res.status(204).json(project)
    } catch(error) { 
        next(error) 
    }
})

// * get all tasks w/ project name and description
router.get("/tasks", async (req, res, next) => {
    try {
       const tasks = await database_access
            .innerJoin("projects", "tasks.project_id", "projects.id")
            .select("*")
            .from("tasks")
        res.status(200).json(tasks)
    } catch(error) { 
        next(error) 
    }
})

// SELECT "tasks.name", "projects.name", "projcts.description" FROM "tasks"
// JOIN "projects" ON "tasks.project_id" = "projects.id"

// * add new taks to a project
router.post("/tasks", async (req, res, next) => {
    try {
        const task = await database_access
            .insert({
                id: Math.random(),
                description: req.body.description,
                notes: req.body.notes,
                project_id: req.body.project_id 
            })
            .into("tasks")
        res.status(204).json(task)
    } catch(error) { 
        next(error) 
    }
})

module.exports = router;
