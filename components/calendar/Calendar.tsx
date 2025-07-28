import { useCalendar } from "@/hooks/calendar/useCalendar";
import { Day, viewCalendarType, Weeks } from "@/types/calendar";
import { useEffect, useRef } from "react";
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
  const calendarRef = useRef<FlatList>(null);

  const { date, daySelected, selectedDay, setDate, calendarWeekDays } =
    useCalendar();

  const MAX_HEIGHT = calendarWeekDays.length > 35 ? 270 : 230;
  const MIN_HEIGHT = 54;

  const calendarHeight = useSharedValue(MIN_HEIGHT);
  const translateYAnimated = useAnimatedStyle(() => {
    return {
      height: calendarHeight.value,
    };
  });

  useEffect(() => {
    if (viewCalendar === "week") {
      calendarHeight.value = withSpring(MIN_HEIGHT);
    } else {
      calendarHeight.value = withSpring(MAX_HEIGHT);
    }
  }, [viewCalendar, MAX_HEIGHT, calendarHeight]);

  useEffect(() => {
    if (viewCalendar === "week") {
      calendarRef.current?.scrollToIndex({
        index: 4,
      });
    } else {
      calendarRef.current?.scrollToOffset({
        offset: 0,
        animated: true,
      });
    }
  }, [viewCalendar]);

  const weeks: Weeks = [];
  for (let i = 0; i < calendarWeekDays.length; i += 7) {
    weeks.push(calendarWeekDays.slice(i, i + 7));
  }

  const selectedWeekIndex = weeks.findIndex((week) =>
    week.some(
      (day) =>
        day.day === daySelected?.day &&
        day.month === daySelected?.month &&
        day.year === daySelected?.year
    )
  );

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
            overflow: "hidden",
            position: "relative",
          },
          translateYAnimated,
        ]}
      >
        <FlatList
          horizontal={viewCalendar === "week"}
          decelerationRate={"fast"}
          pagingEnabled
          ref={calendarRef}
          initialNumToRender={3}
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
              {week.map((day: Day, dayIndex: number) => (
                <ButtonDay
                  key={`${day}-${day.month}-${dayIndex}`}
                  day={day}
                  selected={daySelected}
                  updateSelectedDay={selectedDay}
                  activeIndicator={dayIndex % 2 === 0}
                />
              ))}
            </View>
          )}
          getItemLayout={(data, index) => ({
            length: SCREEN_WIDTH - 32,
            offset: (SCREEN_WIDTH - 32) * index,
            index,
          })}
        />
      </Animated.View>
    </View>
  );
};
