import { format, monthDays } from "@formkit/tempo";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { MonthSelector } from "./MonthSelector";

const days = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"];

export function Calendar() {
  const [date, setDate] = useState(new Date());
  const [daySelected, setDaySelected] = useState<number | null>(
    new Date().getDate()
  );

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

  const translateY = useSharedValue(40);

  const gesture = Gesture.Pan().onUpdate((event) => {
    translateY.value = event.translationY;
  });

  const translateYAnimated = useAnimatedStyle(() => {
    return {
      height: translateY.value,
    };
  });

  return (
    <View style={{ marginTop: 16, paddingHorizontal: 16 }}>
      <MonthSelector date={date} onChangeDate={setDate} />
      {/* Days week */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 8,
          marginBottom: 8,
        }}
      >
        {days.map((day) => (
          <Text
            key={day}
            style={{
              fontSize: 16,
              fontWeight: "bold",
              width: `${100 / 7}%`,
              textAlign: "center",
            }}
          >
            {day}
          </Text>
        ))}
      </View>

      {/* Days month */}
      <GestureHandlerRootView style={{ height: "auto" }}>
        <GestureDetector gesture={gesture}>
          <Animated.View
            style={[
              {
                flexDirection: "row",
                justifyContent: "flex-start",
                flexWrap: "wrap",
                rowGap: 6,
                overflow: "hidden",
                position: "relative",
              },
              translateYAnimated,
            ]}
          >
            {weekDays.map(({ day, month }, index) => (
              <View
                key={index}
                style={{
                  width: `${100 / 7}%`,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Pressable
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 9999,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor:
                      day === daySelected &&
                      index >= firstWeekDay &&
                      index < firstWeekDay + dayInMonth
                        ? "#FADADD"
                        : "transparent",
                    borderWidth:
                      day === date.getDate() && month === date.getMonth()
                        ? 2
                        : 0,
                    borderColor: "#A8DADC",
                  }}
                  onPress={() => selectedDay(day)}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      textAlign: "center",
                      color:
                        index < firstWeekDay ||
                        index >= firstWeekDay + dayInMonth
                          ? "#ccc"
                          : "black",
                    }}
                  >
                    {day}
                  </Text>
                </Pressable>
              </View>
            ))}
            <View
              style={{
                height: 6,
                width: 40,
                borderRadius: 9999,
                marginHorizontal: "auto",
                backgroundColor: "#A8DADC",
                marginTop: 8,
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: [{ translateX: -20 }],
              }}
            />
          </Animated.View>
        </GestureDetector>
      </GestureHandlerRootView>
    </View>
  );
}
