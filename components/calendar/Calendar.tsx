import { useCalendar } from "@/hooks/calendar/useCalendar";
import { viewCalendarType, Weeks } from "@/types/calendar";
import { useEffect } from "react";
import { Dimensions, FlatList, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { ButtonDay } from "./ButtonDay";
import { MonthSelector } from "./MonthSelector";
import { WeekDays } from "./WeekDays";

const SCREEN_WIDTH = Dimensions.get("window").width;

export const Calendar = ({
  viewCalendar,
}: {
  viewCalendar: viewCalendarType;
}) => {
  const { date, daySelected, selectedDay, setDate, weekDays } = useCalendar();

  const MAX_HEIGHT = weekDays.length > 35 ? 270 : 230;
  const MIN_HEIGHT = 54;

  const calendarHeight = useSharedValue(MIN_HEIGHT);

  useEffect(() => {
    if (viewCalendar === "week") {
      calendarHeight.value = withSpring(MIN_HEIGHT);
    } else {
      calendarHeight.value = withSpring(MAX_HEIGHT);
    }
  }, [viewCalendar, MAX_HEIGHT, calendarHeight]);

  const translateYAnimated = useAnimatedStyle(() => {
    return {
      height: calendarHeight.value,
    };
  });

  const weeks: Weeks = [];
  for (let i = 0; i < weekDays.length; i += 7) {
    weeks.push(weekDays.slice(i, i + 7));
  }

  return (
    <View style={{ marginTop: 16, paddingHorizontal: 16, paddingBottom: 12 }}>
      <MonthSelector date={date} onChangeDate={setDate} />

      <WeekDays />

      {/* Days month */}
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
        <FlatList
          horizontal={viewCalendar === "week"}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          data={weeks}
          style={{ paddingTop: 4, paddingBottom: 8 }}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item: week }) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                width: SCREEN_WIDTH - 32,
              }}
            >
              {week.map((day, dayIndex) => (
                <ButtonDay
                  key={`${day}-${day.month}-${dayIndex}`}
                  day={day}
                  selected={daySelected}
                  updateSelectedDay={selectedDay}
                />
              ))}
            </View>
          )}
        />
      </Animated.View>
    </View>
  );
};
