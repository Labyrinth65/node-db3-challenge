const db = require("../data/db-config");

module.exports = {
	find,
	findById,
	findSteps
	// add,
	// addStep,
	// update,
	// remove
};

function find() {
	return db("schemes");
}

function findById(id) {
	return db("schemes")
		.where("id", id)
		.first();
}

function findSteps(id) {
	return db("steps")
		.where("scheme_id", id)
		.orderBy("step_number");
}
