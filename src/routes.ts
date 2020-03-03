import { Router } from "express";
import AppointmentController from "./app/controllers/appointmentsController";
import ruleMiddleware from "./app/middlewares/rules";
import ScheduleController from "./app/controllers/ScheduleController";

const routes = Router();

routes.get("/appointments", AppointmentController.index);
routes.post("/appointments", ruleMiddleware, AppointmentController.store);
routes.delete("/appointment/:id", AppointmentController.remove);

routes.get("/schedules", ScheduleController.index);

export default routes;
