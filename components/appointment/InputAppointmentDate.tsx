import { COLORS } from "@/constants/colors";
import { FONT_WEIGHT } from "@/constants/fonts";
import { Day } from "@/types/calendar";
import { format } from "@formkit/tempo";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Calendar } from "../calendar/Calendar";
import { ModalAppointment } from "./ModalAppointment";

interface InputAppointmentDateProps {
  selectedDay: Day;
  appointmentDate: Day;
  onSelectedDayChange: (day: Day | null) => void;
  onSave?: () => void;
}
export const InputAppointmentDate = ({
  onSelectedDayChange,
  selectedDay,
  appointmentDate,
  onSave,
}: InputAppointmentDateProps) => {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Fecha</Text>
      <Text
        onPress={() => setShowCalendar(true)}
        style={styles.dateText}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {format(
          new Date(
            appointmentDate.year,
            appointmentDate.month,
            appointmentDate.day ?? 1
          ),
          "long",
          "es"
        )}
      </Text>
      <ModalAppointment
        showModal={showCalendar}
        onToggleModal={setShowCalendar}
        onSave={() => onSave?.()}
      >
        <View>
          <Calendar
            daySelected={selectedDay}
            handleSelectedDay={onSelectedDayChange}
          />
          <View />
        </View>
      </ModalAppointment>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
    fontFamily: FONT_WEIGHT.semibold,
    color: COLORS.a_textPrimary,
  },
  dateText: {
    fontSize: 22,
    fontFamily: FONT_WEIGHT.bold,
    padding: 0,
    paddingBottom: 4,
    width: "auto",
    borderBottomWidth: 2,
    borderBottomColor: COLORS.a_textPrimary,
  },
});
