const eventModel = require("../models/events");
const bookingDataModel = require("../models/bookingdata");

const controller = {
	listBookingData: async (req, res) => {
		let bookingData = [];
		try {
			bookingData = await bookingDataModel.find({});
		} catch (err) {
			res.status(500);
			return res.json({ error: "failed to return indexProperties" });
		}
		return res.json(bookingData);
	},
	createEvent: async (req, res) => {
		try {
			console.log("listening");
			console.log(req.body);
			await eventModel.create(req.body);
		} catch (err) {
			res.status(500);
			return res.json({ error: "failed to create event" });
		}
		return res.status(201).json();
	},
	listEvent: async (req, res) => {
		let eventData = [];
		try {
			eventData = await eventModel.find({});
		} catch (err) {
			res.status(500);
			return res.json({ error: "failed to return indexProperties" });
		}
		return res.json(eventData);
	},
};

module.exports = controller;
