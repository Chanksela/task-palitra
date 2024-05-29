const db = require("./connect");
const { promisify } = require("util");

const getAll = async (sql) => {
	const allAsync = promisify(db.all.bind(db));

	try {
		const data = await allAsync(sql);
		return data;
	} catch (error) {
		throw error;
	}
};

const getById = async (sql) => {
	const asyncGetById = promisify(db.get.bind(db));
	try {
		const data = await asyncGetById(sql);
		return data;
	} catch (error) {
		throw error;
	}
};

const add = async (sql) => {
	const addAsync = promisify(db.run.bind(db));
	try {
		await addAsync(sql);
	} catch (error) {
		throw error;
	}
};

const remove = async (sql) => {
	const removeAsync = promisify(db.run.bind(db));
	try {
		await removeAsync(sql);
	} catch (error) {
		throw error;
	}
};

module.exports = { getAll, getById, add, remove };
