const Router = require("express");
const {getEventsController} = require("./events.controller");
const eventsRouter = Router();
eventsRouter.get("/getEvents",getEventsController);
module.exports = {eventsRouter};