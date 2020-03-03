import { Request, Response } from "express";
import helper from "../helper/helper";
import appointmments from "../models/appointments";

class AppointmentsController {
  public index(req: Request, res: Response): Response {
    const appointments = helper.loadAppointments();

    return res.json(appointments);
  }

  public store(req: Request, res: Response): Response {
    const appointments: Array<appointmments> = helper.loadAppointments();
    const { type, date, intervals } = req.body;

    const newAppointment = {
      id: helper.getNewId(appointments),
      type,
      date,
      intervals
    };

    appointments.push(newAppointment);

    helper.saveAppointments(appointments);
    const appointmentJson = JSON.stringify(newAppointment);

    return res.status(200).json(JSON.parse(appointmentJson));
  }

  public remove(req: Request, res: Response): Response {
    const { id } = req.params;
    const appointments: Array<appointmments> = helper.loadAppointments();
    const index = appointments.findIndex(
      element => element.id.toString() === id
    );

    console.log(index);
    if (appointments[index]) {
      appointments.splice(index, 1);
      helper.saveAppointments(appointments);

      return res.json({ message: "Appointment removed!" });
    }

    return res.status(400).json({ error: "No appointment found!" });
  }
}

export default new AppointmentsController();
