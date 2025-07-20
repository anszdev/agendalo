import { FONT_WEIGHT } from "@/constants/fonts";
import { useCalendar } from "@/hooks/calendar/useCalendar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Appointment } from "./Appointment";
import { AppointmentHours } from "./AppointmentHours";

export const ListAppointment = () => {
  const { formattedDayText } = useCalendar();

  return (
    <View style={st.list_appointment}>
      <View style={st.list_appointment_header}>
        <Text style={st.list_appointment_day}>{formattedDayText}</Text>
        <Text style={st.list_appointment_count}>3 citas</Text>
      </View>
      <View>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => (
            <AppointmentHours hour="11:00" amPm="AM">
              <Appointment name="Tulio Treviño" time="11:00" />
            </AppointmentHours>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 16 }}
        />
      </View>
    </View>
  );
};

const st = StyleSheet.create({
  list_appointment: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 16,
    paddingVertical: 24,
    zIndex: 2,
    position: "relative",
    backgroundColor: "#fff",
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
  },
});
