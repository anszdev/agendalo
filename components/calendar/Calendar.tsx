import { format, monthDays } from "@formkit/tempo";
import { Pressable, Text, View } from "react-native";

export function Calendar() {
  const currentMonthAndYear = format(new Date(), "MMMM, YYYY", "es");
  const days = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"];

  //Saber cuantos dias tiene el mes
  const firstDay = new Date(2025, 6, 1).getDay();
  const firstWeekDay = (firstDay + 6) % 7;

  const dayInMonth = monthDays("2025-07");
  const daysInPreviousMonth = monthDays("2025-06");

  const previousMonthDays = Array.from(
    { length: firstWeekDay },
    (_, i) => daysInPreviousMonth - firstWeekDay + i + 1
  );

  const week = Array.from({ length: dayInMonth }, (_, i) => i + 1);

  const totalNeed = 35;
  const daysSoFar = previousMonthDays.length + week.length;
  const nextMonthDays = Array.from(
    { length: totalNeed - daysSoFar },
    (_, i) => i + 1
  );

  const weekDays = [...previousMonthDays, ...week, ...nextMonthDays];

  const currentDay = Number(format(new Date(), "D"));

  return (
    <View style={{ marginTop: 16, paddingHorizontal: 16 }}>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          {currentMonthAndYear}
        </Text>
      </View>
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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          rowGap: 6,
        }}
      >
        {weekDays.map((day, index) => (
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
                backgroundColor: day === currentDay ? "#FADADD" : "transparent",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  textAlign: "center",
                  color:
                    index < firstWeekDay || index >= firstWeekDay + dayInMonth
                      ? "#ccc"
                      : "black",
                }}
              >
                {day}
              </Text>
            </Pressable>
          </View>
        ))}
      </View>
    </View>
  );
}
