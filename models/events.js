const { string } = require("joi");
const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
	id: {
		type: String,
		required: true,
	},
	title: {
		type: String,
	},
	start: {
		type: Date,
	},
	end: {
		type: Date,
	},
	category: {
		type: String,
	},
	color: {
		type: String,
	},
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
