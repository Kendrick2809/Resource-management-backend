require("dotenv").config();

const connectToMongo = require("./database/mongodb");

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const req = require("express/lib/request");
const app = express();
const port = process.env.PORT || 8000;
const controller = require("./controllers/page_controller");

//use body parser to send form-data
var bodyParser = require("body-parser");
app.use(bodyParser.json());

//routes
const eventRouter = require("./routers/eventRoutes");

app.use(bodyParser.urlencoded({ extended: true }));
// allow cross-origin requests
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

// app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(
	cors({
		origin: "*",
	})
);

//Router
app.use("/api/v1/event", eventRouter);

app.get("/api/v1/event/", (req, res) => {
	res.send("append /api/v1/...");
});

//Server
app.listen(port, async () => {
	try {
		await mongoose.connect(connectToMongo.uri, {
			dbName: process.env.DB_NAME,
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
	} catch (err) {
		console.log("Failed to connect to Mongo Atlas. Error is: ", err);
		process.exit(1);
	}

	console.log(`Scheduler is listening on port ${port}`);
});
