import { APPOINTMENT_COLORS } from "@/constants/colors";

export const getRandomColor = () => {
  const arrayColors = Object.entries(APPOINTMENT_COLORS);
  const random = Math.floor(Math.random() * arrayColors.length);

  return arrayColors[random][1];
};
