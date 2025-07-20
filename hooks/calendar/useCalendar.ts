import {
  dateAtom,
  daySelectedAtom,
  formattedDayTextAtom,
} from "@/atoms/calendar";
import { Day } from "@/types/calendar";
import { format, monthDays } from "@formkit/tempo";
import { useAtom } from "jotai";

export const useCalendar = () => {
  const [date, setDate] = useAtom(dateAtom);
  const [daySelected, setDaySelected] = useAtom(daySelectedAtom);
  const [formattedDayText] = useAtom(formattedDayTextAtom);

  // Generate the calendar days for the current month
  const firstDayOfMonth = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getDay();
  const calculatedFirstWeekDay = (firstDayOfMonth + 6) % 7;

  const totalDaysInMonth = monthDays(format(date, "YYYY-MM", "es"));

  const prevMonthEmptyDays = Array.from(
    { length: calculatedFirstWeekDay },
    (_, i) => ({
      day: null,
      month: date.getMonth() - 1,
      year: date.getFullYear(),
    })
  );

  const calendarDays = Array.from({ length: totalDaysInMonth }, (_, i) => ({
    day: i + 1,
    month: date.getMonth(),
    year: date.getFullYear(),
  }));

  const requiredTotal = 35;
  const daysCounted = prevMonthEmptyDays.length + calendarDays.length;
  const nextMonthPlaceholderDays = Array.from(
    { length: requiredTotal - daysCounted },
    (_, i) => ({
      day: null,
      month: date.getMonth() + 1,
      year: date.getFullYear(),
    })
  );

  const calendarWeekDays = [
    ...prevMonthEmptyDays,
    ...calendarDays,
    ...nextMonthPlaceholderDays,
  ];

  const selectedDay = (day: Day | null) => {
    if (!day?.day) return;
    setDaySelected(day);
  };

  return {
    date,
    setDate,
    daySelected,
    setDaySelected,
    calendarWeekDays,
    selectedDay,
    calculatedFirstWeekDay,
    totalDaysInMonth,
    formattedDayText,
  };
};
