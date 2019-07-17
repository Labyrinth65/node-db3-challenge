const db = require("../data/db-config");

module.exports = {
	find,
	findById,
	findSteps,
	add,
	addStep,
	update,
	remove
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
	return db("steps as c")
		.join("schemes as p", "p.id", "c.scheme_id")
		.where("scheme_id", id)
		.select("c.id", "p.scheme_name", "c.step_number", "c.instructions")
		.orderBy("step_number");
}

function add(scheme) {
	return db("schemes")
		.insert(scheme)
		.then(([id]) => findById(id));
}

function findStepById(id) {
	return db("steps")
		.where("id", id)
		.first();
}

function addStep(step, schemeID) {
	return db("steps")
		.insert({ ...step, scheme_id: schemeID })
		.then(([stepID]) => findStepById(stepID));
}

function update(changes, id) {
	return db("schemes")
		.where("id", id)
		.update(changes)
		.then(count => (count > 0 ? findById(id) : null));
}

function remove(id) {
	return db("schemes")
		.where("id", id)
		.del();
}
