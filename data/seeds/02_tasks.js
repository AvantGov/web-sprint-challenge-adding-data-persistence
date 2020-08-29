exports.seed = async function(knex) {
	await knex("tasks").insert([   
        {id: 1, description: "task 1", notes: "amps austin succulents ethical 8-bit pop-up. Blog fam retro, pour-over dreamcatcher", completed: false, project_id: 1},
        {id: 2, description: "task 2", notes: "amps austin succulents ethical 8-bit pop-up. Blog fam retro, pour-over dreamcatcher", completed: false, project_id: 2},
        {id: 3, description: "task 3", notes: "amps austin succulents ethical 8-bit pop-up. Blog fam retro, pour-over dreamcatcher", completed: false, project_id: 3},
        {id: 4, description: "task 4", notes: "amps austin succulents ethical 8-bit pop-up. Blog fam retro, pour-over dreamcatcher", completed: false, project_id: 4}
	])
}