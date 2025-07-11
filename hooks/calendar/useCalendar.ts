import { format, monthDays } from "@formkit/tempo";
import { useState } from "react";

export const useCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [daySelected, setDaySelected] = useState<number | null>(
    new Date().getDate()
  );
  const days = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"];

  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const firstWeekDay = (firstDay + 6) % 7;

  const dayInMonth = monthDays(format(date, "YYYY-MM", "es"));
  const daysInPreviousMonth = monthDays(format(date, "YYYY-MM", "es"));

  const previousMonthDays = Array.from({ length: firstWeekDay }, (_, i) => ({
    day: daysInPreviousMonth - firstWeekDay + i + 1,
    month: date.getMonth() - 1,
  }));

  const week = Array.from({ length: dayInMonth }, (_, i) => ({
    day: i + 1,
    month: date.getMonth(),
  }));

  const totalNeed = 35;
  const daysSoFar = previousMonthDays.length + week.length;
  const nextMonthDays = Array.from(
    { length: totalNeed - daysSoFar },
    (_, i) => ({ day: i + 1, month: date.getMonth() + 1 })
  );

  const weekDays = [...previousMonthDays, ...week, ...nextMonthDays];

  const selectedDay = (day: number) => {
    setDaySelected(day);
  };

  return {
    date,
    setDate,
    daySelected,
    setDaySelected,
    weekDays,
    selectedDay,
    firstWeekDay,
    dayInMonth,
    days,
  };
};
