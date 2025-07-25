import { FONT_WEIGHT } from "@/constants/fonts";
import Feather from "@expo/vector-icons/Feather";
import { format } from "@formkit/tempo";
import { Pressable, Text, View } from "react-native";

interface MonthSelectorProps {
  date: Date;
  onChangeDate: (date: Date) => void;
}

export const MonthSelector = ({ date, onChangeDate }: MonthSelectorProps) => {
  const currentMonthAndYear = format(date, "MMMM YYYY", "es");

  const prevMonth = () => {
    onChangeDate(new Date(date.setMonth(date.getMonth() - 1)));
  };

  const nextMonth = () => {
    onChangeDate(new Date(date.setMonth(date.getMonth() + 1)));
  };

  const resetMonth = () => {
    onChangeDate(new Date());
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        justifyContent: "space-between",
        paddingHorizontal: 8,
      }}
    >
      <Pressable
        onPress={prevMonth}
        style={{
          height: 36,
          width: 36,
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Feather name="chevron-left" size={24} color="black" />
      </Pressable>
      <Text
        style={{
          fontSize: 20,
          fontFamily: FONT_WEIGHT.bold,
          textTransform: "capitalize",
        }}
        onPress={resetMonth}
      >
        {currentMonthAndYear}
      </Text>
      <Pressable
        onPress={nextMonth}
        style={{
          height: 36,
          width: 36,
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <Feather name="chevron-right" size={24} color="black" />
      </Pressable>
    </View>
  );
};
