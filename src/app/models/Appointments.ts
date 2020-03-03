interface AppointmentInterface {
  id?: number;
  type: string;
  date?: string;
  intervals?: Array<string>;
  days?: Array<number>;
}

export default AppointmentInterface;
