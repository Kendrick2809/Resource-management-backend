const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const controller = require("../controllers/page_controller");

//Routes from /api/v1/event

router.get("/", controller.listEvent);
router.post("/", controller.createEvent);
router.get("/booking", controller.listBookingData);

module.exports = router;
