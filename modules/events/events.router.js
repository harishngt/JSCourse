const Router = require("express");
const {getEventsController,createEventController} = require("./events.controller");
const eventsRouter = Router();
eventsRouter.get("/getEvents",getEventsController);
eventsRouter.post("/createEvent",createEventController);
module.exports = {eventsRouter};