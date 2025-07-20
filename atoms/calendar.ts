import { Day } from "@/types/calendar";
import { format } from "@formkit/tempo";
import { atom } from "jotai";

export const dateAtom = atom(new Date());
export const daySelectedAtom = atom<Day>({
  day: new Date().getDate(),
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
});

export const formattedDayTextAtom = atom((get) => {
  const { day, month, year } = get(daySelectedAtom);
  return format(new Date(year, month, day ?? 1), "dddd D", "es");
});
