import ScheduleInterval from "./ScheduleInterval";

interface DailySchedule {
  day?: Date;
  intervals?: Array<ScheduleInterval>;
}

export default DailySchedule;
