import { COLORS } from "@/constants/colors";
import { FONT_WEIGHT } from "@/constants/fonts";
import { Day } from "@/types/calendar";
import { useEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface ButtonDayProps {
  day: Day;
  selected: Day | null;
  updateSelectedDay: (day: Day | null) => void;
  activeIndicator?: boolean;
}

export const ButtonDay = ({
  day,
  selected,
  updateSelectedDay,
  activeIndicator = false,
}: ButtonDayProps) => {
  const isSelected =
    day?.day === selected?.day &&
    day?.month === selected?.month &&
    day?.year === selected?.year;

  const animatedOpacity = useSharedValue(isSelected ? 1 : 0);

  useEffect(() => {
    animatedOpacity.value = withTiming(isSelected ? 1 : 0);
  }, [isSelected, animatedOpacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: animatedOpacity.value,
  }));

  return (
    <Pressable
      style={style.day}
      onPress={() => updateSelectedDay(day)}
      onLongPress={() => console.log("Long Pressed", day)}
    >
      <Animated.View style={[isSelected && style.daySelected, animatedStyle]} />

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
      {activeIndicator && day.day !== null && <View style={style.indicator} />}
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
    width: 44,
    height: 44,
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
  indicator: {
    position: "absolute",
    bottom: 2,
    left: "50%",
    width: 5,
    height: 5,
    backgroundColor: COLORS.a_primary,
    borderRadius: 999,
    transform: [{ translateX: -2.5 }],
  },
});
