const { string } = require("joi");
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
	uuid: {
		type: String,
	},
	status: {
		type: String,
	},
	date: {
		type: Date,
		required: true,
	},
	start_time: {
		type: String,
	},
	end_time: {
		type: String,
	},
	user_uuid: {
		type: String,
	},
	name: {
		type: String,
	},
	code: {
		type: String,
	},
	type: {
		type: String,
	},
});

const BookingData = mongoose.model("BookingData", bookingSchema);

module.exports = BookingData;
