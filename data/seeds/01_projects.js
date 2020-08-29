exports.seed = async function(knex) {
	await knex("projects").insert([   
        {id:"1", name: "project 1", description: "Cred tumeric iceland occupy kogi hella next level deep v celiac.", complete: false},
        {id:"2", name: "project 2", description: "Cred tumeric iceland occupy kogi hella next level deep v celiac.", complete: false},
        {id:"3", name: "project 3", description: "Cred tumeric iceland occupy kogi hella next level deep v celiac.", complete: false},
        {id:"4", name: "project 4", description: "Cred tumeric iceland occupy kogi hella next level deep v celiac.", complete: false}
	])
}