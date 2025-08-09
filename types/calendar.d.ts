export type viewCalendarType = "hidden" | "month";
export type Day = {
  day: number | null;
  month: number;
  year: number;
};

export type Time = {
  hour: string;
  minute: string;
  amPm: "AM" | "PM";
};

export type Weeks = Day[][];
