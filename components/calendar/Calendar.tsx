import { useCalendar } from "@/hooks/calendar/useCalendar";
import { Day } from "@/types/calendar";
import { Dimensions, FlatList, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { ButtonDay } from "./ButtonDay";
import { MonthSelector } from "./MonthSelector";
import { WeekDays } from "./WeekDays";

const SCREEN_WIDTH = Dimensions.get("window").width;

export const Calendar = () => {
  const { date, daySelected, selectedDay, setDate, calendarWeekDays, weeks } =
    useCalendar();

  const MAX_HEIGHT = calendarWeekDays.length > 35 ? 330 : 300;
  const MIN_HEIGHT = calendarWeekDays.length > 35 ? 330 : 300;

  const calendarHeight = useSharedValue(MIN_HEIGHT);
  const translateYAnimated = useAnimatedStyle(() => {
    return {
      height: calendarHeight.value,
    };
  });

  /* useEffect(() => {
    if (viewCalendar === "week") {
      calendarHeight.value = withSpring(MIN_HEIGHT);
    } else {
      calendarHeight.value = withSpring(MAX_HEIGHT);
    }
  }, [viewCalendar, MAX_HEIGHT]); */

  return (
    <View style={{ marginTop: 16, paddingHorizontal: 16, paddingBottom: 12 }}>
      <Animated.View
        style={[
          {
            overflow: "hidden",
            position: "relative",
          },
          translateYAnimated,
        ]}
      >
        <MonthSelector date={date} onChangeDate={setDate} />
        <WeekDays />

        <FlatList
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
        />
      </Animated.View>
    </View>
  );
};
