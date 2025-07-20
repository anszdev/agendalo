import { FONT_WEIGHT } from "@/constants/fonts";
import { Day } from "@/types/calendar";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface ButtonDayProps {
  day: Day;
  selected: Day | null;
  updateSelectedDay: (day: Day | null) => void;
}

export const ButtonDay = ({
  day,
  selected,
  updateSelectedDay,
}: ButtonDayProps) => {
  const isSelected =
    day?.day === selected?.day &&
    day?.month === selected?.month &&
    day?.year === selected?.year;

  return (
    <Pressable style={style.day} onPress={() => updateSelectedDay(day)}>
      <View style={isSelected && style.daySelected} />
      <Text
        style={[
          style.text_day,
          {
            fontFamily: isSelected ? FONT_WEIGHT.bold : FONT_WEIGHT.medium,
            color: isSelected ? "#000" : "#333",
          },
        ]}
      >
        {day?.day ?? ""}
      </Text>
    </Pressable>
  );
};

const style = StyleSheet.create({
  day: {
    width: 40,
    height: 40,
    borderRadius: 9999,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "transparent",
    marginHorizontal: 5,
    position: "relative",
  },
  text_day: {
    fontSize: 18,
    textAlign: "center",
  },
  daySelected: {
    position: "absolute",
    backgroundColor: "#fff",
    width: 46,
    height: 46,
    borderRadius: 9999,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 4,
  },
});
