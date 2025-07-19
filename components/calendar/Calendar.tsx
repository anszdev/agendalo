import { FONT_WEIGHT } from "@/constants/fonts";
import { useCalendar } from "@/hooks/calendar/useCalendar";
import { viewCalendarType } from "@/types/calendar";
import { useEffect } from "react";
import { Dimensions, FlatList, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { ButtonDay } from "./ButtonDay";
import { MonthSelector } from "./MonthSelector";

const SCREEN_WIDTH = Dimensions.get("window").width;

export const Calendar = ({
  viewCalendar,
}: {
  viewCalendar: viewCalendarType;
}) => {
  const { date, daySelected, selectedDay, setDate, weekDays, days } =
    useCalendar();

  const MAX_HEIGHT = weekDays.length > 35 ? 270 : 230;
  const MIN_HEIGHT = 46;

  const calendarHeight = useSharedValue(MIN_HEIGHT);

  useEffect(() => {
    if (viewCalendar === "week") {
      calendarHeight.value = withSpring(MIN_HEIGHT);
    } else {
      calendarHeight.value = withSpring(MAX_HEIGHT);
    }
  }, [viewCalendar]);

  /* const gesture = Gesture.Pan()
    .onBegin(() => {
      starCalendarHeight.value = calendarHeight.value;
    })
    .onUpdate((event) => {
      const nextHeight = starCalendarHeight.value + event.translationY;

      if (nextHeight >= MIN_HEIGHT && nextHeight <= MAX_HEIGHT) {
        calendarHeight.value = nextHeight;
      }
    })
    .onEnd((event) => {
      if (event.translationY > 20) {
        calendarHeight.value = withSpring(MAX_HEIGHT);
      } else {
        calendarHeight.value = withSpring(MIN_HEIGHT);
      }
    }); */

  const translateYAnimated = useAnimatedStyle(() => {
    return {
      height: calendarHeight.value,
    };
  });

  type Day = {
    day: number | string;
    month: number;
  };

  type Weeks = Day[][];

  const weeks: Weeks = [];
  for (let i = 0; i < weekDays.length; i += 7) {
    weeks.push(weekDays.slice(i, i + 7));
  }

  return (
    <View style={{ marginTop: 16, paddingHorizontal: 16, paddingBottom: 12 }}>
      <MonthSelector date={date} onChangeDate={setDate} />
      {/* Days week */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
          marginBottom: 6,
        }}
      >
        {days.map((day) => (
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

      {/* Days month */}
      <GestureHandlerRootView style={{ height: "auto" }}>
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
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item: week }) => (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  width: SCREEN_WIDTH - 32,
                }}
              >
                {week.map(({ day, month }, dayIndex) => (
                  <ButtonDay
                    key={`${day}-${month}-${dayIndex}`}
                    day={day}
                    month={month}
                    daySelected={daySelected}
                    selectedDay={selectedDay}
                  />
                ))}
              </View>
            )}
          />
        </Animated.View>
        {/* <GestureDetector gesture={gesture}>
        <View
          style={{
            paddingHorizontal: 12,
            paddingTop: 8,
            paddingBottom: 16,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: 60,
              height: 6,
              backgroundColor: "#fff",
              borderRadius: 9999,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 3,
            }}
          />
        </View>
        </GestureDetector> */}
      </GestureHandlerRootView>
    </View>
  );
};
