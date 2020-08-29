exports.seed = async function(knex) {
	await knex("resources").insert([   
        {id: 1, name: "computer", description: "Yuccie dreamcatcher gluten-free, plaid humblebrag prism cold-pressed"},
        {id: 2, name: "synergy", description: "Yuccie dreamcatcher gluten-free, plaid humblebrag prism cold-pressed"},
        {id: 3, name: "the entire marketing department", description: "Yuccie dreamcatcher gluten-free, plaid humblebrag prism cold-pressed"},
        {id: 4, name: "whatever it takes", description: "Yuccie dreamcatcher gluten-free, plaid humblebrag prism cold-pressed"}
	])
}