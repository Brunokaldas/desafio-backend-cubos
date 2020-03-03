import { Request, Response } from "express";
import { parse, format, getDay, isSameDay } from "date-fns";
import helper from "../helper/helper";
import AppointmentInterface from "../models/Appointments";

class ScheduleController {
  public index(req: Request, res: Response): Response {
    const { startDate, endDate } = req.query;
    const appointments: Array<AppointmentInterface> = helper.loadAppointments();

    var start = helper.parseDate(startDate);
    var end = helper.parseDate(endDate);

    const weeklyAppointments = appointments.filter(
      appointment => appointment.type === "weekly"
    );
    const dailyAppointments = appointments.filter(
      appointment => appointment.type === "daily"
    );
    const specificAppointments = appointments.filter(
      appointment => appointment.type === "specific"
    );

    const dailyIntervals = dailyAppointments.map(
      appointments => appointments.intervals
    );

    const concatIntervals = [].concat(...dailyIntervals);

    const result = helper.getRangeDates(start, end).map(day => {
      const specificIntervals = specificAppointments
        .filter(appointment =>
          isSameDay(parse(appointment.date, "dd-MM-yyyy", new Date()), day)
        )
        .map(specific => specific.intervals);

      const concactSpecificIntervals = [].concat(...specificIntervals);

      const weeklyIntervals = weeklyAppointments
        .filter(appointments => appointments.days.includes(day.getDay()))
        .map(weekly => weekly.intervals);

      const concactWeeklyIntervals = [].concat(...weeklyIntervals);

      const intervals = concactSpecificIntervals
        .concat(concatIntervals)
        .concat(concactWeeklyIntervals);
      return { day: format(day, "dd-MM-yyyy"), intervals: intervals };
    });

    const resultSring = JSON.stringify(result);
    const resultJSON = JSON.parse(resultSring);

    return res.json(resultJSON);
  }
}

export default new ScheduleController();
