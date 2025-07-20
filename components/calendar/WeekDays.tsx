import { FONT_WEIGHT } from "@/constants/fonts";
import { Dimensions, Text, View } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const weekDaysAbbreviations = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"];

export const WeekDays = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        marginBottom: 6,
      }}
    >
      {weekDaysAbbreviations.map((day) => (
        <Text
          key={day}
          style={{
            fontSize: 16,
            fontFamily: FONT_WEIGHT.bold,
            width: (SCREEN_WIDTH - 32) / 7,
            textAlign: "center",
          }}
        >
          {day}
        </Text>
      ))}
    </View>
  );
};
