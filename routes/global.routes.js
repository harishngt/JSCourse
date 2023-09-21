const Router = require("express");
const {eventsRouter} = require("../modules/events/events.router"); // .. two dots meant becoz global.routes.js does not have any other files in its directory. So another dot is used to move backwards
const globalRouter = Router();
globalRouter.use("/api/events/",eventsRouter);
module.exports = {globalRouter};