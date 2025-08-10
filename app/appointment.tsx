import { daySelectedAtom } from "@/atoms/calendar";
import { InputAppointment } from "@/components/appointment/InputAppointment";
import { InputAppointmentDate } from "@/components/appointment/InputAppointmentDate";
import { InputAppointmentHour } from "@/components/appointment/InputAppointmentHour";
import { TagsAppointment } from "@/components/appointment/TagsAppointment";
import { Input } from "@/components/ui/Input";
import { COLORS } from "@/constants/colors";
import { FONT_WEIGHT } from "@/constants/fonts";
import { type Time } from "@/types/calendar";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { useAtom } from "jotai";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Appointment() {
  const [dateSelected] = useAtom(daySelectedAtom);
  const [temAppointementDate, setTempAppointmentDate] = useState(dateSelected);
  const [tempTime, setTempTime] = useState<Time>({
    hour: "10",
    minute: "00",
    amPm: "AM",
  });

  const [appointment, setAppointment] = useState({
    client: "",
    phone: "",
    date: {
      day: dateSelected.day,
      month: dateSelected.month,
      year: dateSelected.year,
    },
    time: {
      ...tempTime,
    },
    service: "",
    evidence: "",
  });

  return (
    <View style={styles.modal}>
      <View style={{ flex: 1 }}>
        <View style={styles.headerModal}>
          <Pressable
            onPress={() => router.dismiss()}
            style={styles.headerCloseModalButton}
          >
            <Feather name="x" size={20} color="black" />
          </Pressable>
        </View>
        {/* Form content */}
        <View style={{ gap: 24 }}>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontFamily: FONT_WEIGHT.semibold,
                color: COLORS.a_textPrimary,
              }}
            >
              Cliente
            </Text>
            <TextInput
              style={{
                fontSize: 32,
                fontFamily: FONT_WEIGHT.bold,
                textTransform: "capitalize",
                padding: 0,
                color: "#000",
              }}
              placeholder="Nombre del cliente"
              placeholderTextColor="#ddd"
              cursorColor={COLORS.a_textPrimary}
              underlineColorAndroid={"transparent"}
              onChangeText={(text) => {
                setAppointment((prev) => ({ ...prev, client: text }));
              }}
            />
          </View>

          <InputAppointment icon="phone">
            <Input
              label="Teléfono"
              inputMode="tel"
              onChangeText={(text) => {
                setAppointment((prev) => ({ ...prev, phone: text }));
              }}
            />
          </InputAppointment>

          <InputAppointment icon="calendar">
            <InputAppointmentDate
              selectedDay={temAppointementDate}
              appointmentDate={appointment.date}
              onSelectedDayChange={(day) => {
                setTempAppointmentDate(day!);
              }}
              onSave={() => {
                setAppointment((prev) => ({
                  ...prev,
                  date: { ...temAppointementDate },
                }));
              }}
            />
          </InputAppointment>

          <InputAppointment icon="clock">
            <InputAppointmentHour
              selectedTime={appointment.time}
              tempTime={tempTime}
              setTempTime={setTempTime}
              onSave={() => {
                setAppointment((prev) => ({
                  ...prev,
                  time: { ...tempTime },
                }));
              }}
            />
          </InputAppointment>

          <InputAppointment icon="dollar-sign">
            <TagsAppointment />
          </InputAppointment>

          <InputAppointment icon="image">
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: FONT_WEIGHT.semibold,
                  color: COLORS.a_textPrimary,
                }}
              >
                Evidencia
              </Text>
              <TextInput
                style={{
                  fontSize: 22,
                  fontFamily: FONT_WEIGHT.bold,
                  padding: 0,
                  paddingBottom: 4,
                  width: "auto",
                  borderBottomWidth: 2,
                  borderBottomColor: COLORS.a_textPrimary,
                }}
              />
            </View>
          </InputAppointment>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    height: "94%",
    backgroundColor: "#fff",
    marginTop: 60,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  headerModal: { width: "100%", marginBottom: 16 },
  headerCloseModalButton: {
    backgroundColor: "rgba(218, 218, 218, 0.6)",
    borderRadius: 9999,
    padding: 4,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
