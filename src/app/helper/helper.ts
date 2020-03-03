import fs from "fs";
import dataPath from "../../data/path";
import { parse } from "date-fns";

function loadAppointments() {
  try {
    const dataBuffer = fs.readFileSync(dataPath);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
}

function saveAppointments(appointments): void {
  const dataJSON = JSON.stringify(appointments);
  fs.writeFileSync(dataPath, dataJSON);
}

function parseDate(date: string): Date {
  return parse(date, "dd-MM-yyyy", new Date());
}

function getNewId(array: Array<any>): number {
  if (array.length > 0) {
    return array[array.length - 1].id + 1;
  } else {
    return 1;
  }
}

function getRangeDates(startDate, endDate): Array<Date> {
  var dates = [],
    currentDate = startDate,
    addDays = function(days) {
      var date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    };
  while (currentDate <= endDate) {
    dates.push(currentDate);
    currentDate = addDays.call(currentDate, 1);
  }
  return dates;
}

export default {
  loadAppointments,
  saveAppointments,
  parseDate,
  getNewId,
  getRangeDates
};
