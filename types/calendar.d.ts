export type viewCalendarType = "week" | "month";
export type Day = {
  day: number | null;
  month: number;
  year: number;
};

export type Weeks = Day[][];
