import { FONT_WEIGHT } from "@/constants/fonts";
import { Pressable, Text, StyleSheet } from "react-native";

interface ButtonDayProps {
  day: number | string;
  month: number;
  daySelected: number | string | null;
  selectedDay: (day: number | string) => void;
}

export const ButtonDay = ({
  day,
  daySelected,
  month,
  selectedDay,
}: ButtonDayProps) => {
  return (
    <Pressable
      key={`${day}-${month}`}
      style={[
        {
          width: 40,
          height: 40,
          borderRadius: 9999,
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "transparent",
          marginHorizontal: 5,
        },
        day === daySelected && style.daySelected,
      ]}
      onPress={() => selectedDay(day)}
    >
      <Text
        style={{
          fontSize: 18,
          fontFamily: FONT_WEIGHT.semibold,
          textAlign: "center",
          color: "black",
        }}
      >
        {day}
      </Text>
    </Pressable>
  );
};

const style = StyleSheet.create({
  daySelected: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 6,
  },
});
