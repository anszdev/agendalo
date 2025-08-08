import { viewCalendarAtom, viewCalendarHeightAtom } from "@/atoms/calendar";
import { COLORS } from "@/constants/colors";
import { FONT_WEIGHT } from "@/constants/fonts";
import { useCalendar } from "@/hooks/calendar/useCalendar";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Appointment } from "./Appointment";
import { AppointmentHours } from "./AppointmentHours";

export const ListAppointment = () => {
  const { formattedDayText, calendarWeekDays } = useCalendar();
  const [viewCalendar] = useAtom(viewCalendarAtom);
  const [viewCalendarHeight] = useAtom(viewCalendarHeightAtom);

  const translateY = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  useEffect(() => {
    if (viewCalendar === "hidden") {
      translateY.value = withSpring(viewCalendarHeight, {
        damping: 16,
        stiffness: 120,
      }); // Adjust this value as needed
    } else {
      translateY.value = withSpring(0, {
        damping: 16,
        stiffness: 120,
      });
    }
  }, [viewCalendar, calendarWeekDays, translateY, viewCalendarHeight]);

  return (
    <Animated.View style={[style.list_appointment, animatedStyle]}>
      <View style={style.list_appointment_header}>
        <Text style={style.list_appointment_day}>{formattedDayText}</Text>
        <Text style={style.list_appointment_count}>3 citas</Text>
      </View>
      <View>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => (
            <AppointmentHours hour="11:00" amPm="AM">
              <Appointment name="Tulio Treviño" time="11:00" />
            </AppointmentHours>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 16 }}
          style={{ height: 600, paddingBottom: 32 }}
        />
      </View>
    </Animated.View>
  );
};

const style = StyleSheet.create({
  list_appointment: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 16,
    paddingVertical: 24,
    paddingBottom: 200,
    zIndex: 2,
    position: "relative",
    backgroundColor: COLORS.a_background,
    marginTop: -24,
  },
  list_appointment_header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  list_appointment_day: {
    fontSize: 24,
    fontFamily: FONT_WEIGHT.bold,
    textTransform: "capitalize",
  },
  list_appointment_count: {
    fontSize: 18,
    fontFamily: FONT_WEIGHT.semibold,
    color: COLORS.a_textPrimary,
  },
});
