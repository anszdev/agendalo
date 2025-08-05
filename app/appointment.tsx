import { daySelectedAtom } from "@/atoms/calendar";
import { InputAppointment } from "@/components/appointment/InputAppointment";
import { Calendar } from "@/components/calendar/Calendar";
import { Input } from "@/components/ui/Input";
import { COLORS } from "@/constants/colors";
import { FONT_WEIGHT } from "@/constants/fonts";
import { Feather } from "@expo/vector-icons";
import { DateInput, format } from "@formkit/tempo";
import { router } from "expo-router";
import { useAtom } from "jotai";
import { useState } from "react";
import { Modal, Pressable, Text, TextInput, View } from "react-native";

export default function Appointment() {
  const [dateSelected] = useAtom(daySelectedAtom);
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState<DateInput>();

  return (
    <View
      style={{
        height: "94%",
        backgroundColor: "#fff",
        marginTop: 60,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        paddingHorizontal: 16,
        paddingVertical: 24,
      }}
    >
      <View style={{ flex: 1 }}>
        {/* Header modal */}
        <View style={{ width: "100%", marginBottom: 16 }}>
          <Pressable
            onPress={() => router.dismiss()}
            style={{
              backgroundColor: "rgba(218, 218, 218, 0.6)",
              borderRadius: 9999,
              padding: 4,
              height: 40,
              width: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Feather name="x" size={20} color="black" />
          </Pressable>
        </View>

        <View style={{ gap: 24 }}>
          <Input
            label="Nombre"
            placeholder="Nombre del paciente"
            onChangeText={(text) => console.log(text)}
            fontSize={22}
          />

          <InputAppointment icon="phone">
            <Input
              label="Teléfono"
              onChangeText={(text) => console.log(text)}
              fontSize={22}
            />
          </InputAppointment>

          <View style={{ flexDirection: "row", gap: 12 }}>
            <View
              style={{
                width: 60,
                height: 60,
                backgroundColor: "#E9D7F5",
                borderRadius: 999,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Feather name="calendar" size={24} />
            </View>

            <View style={{ flex: 1, justifyContent: "center" }}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: FONT_WEIGHT.semibold,
                  color: COLORS.a_textPrimary,
                }}
              >
                Fecha
              </Text>
              <Text
                onPress={() => setShowCalendar(true)}
                style={{
                  fontSize: 22,
                  fontFamily: FONT_WEIGHT.bold,
                  padding: 0,
                  paddingBottom: 4,
                  width: "auto",
                  borderBottomWidth: 2,
                  borderBottomColor: COLORS.a_textPrimary,
                }}
              >
                {format(
                  date ??
                    new Date(
                      dateSelected.year,
                      dateSelected.month,
                      dateSelected.day ?? 1
                    ),
                  "long",
                  "es"
                )}
              </Text>
              {/* {showCalendar && (
                <DatePicker
                  value={
                    new Date(
                      dateSelected.year,
                      dateSelected.month,
                      dateSelected.day ?? 1
                    )
                  }
                  onChange={(e, selectedDate) => {
                    setShowCalendar(false);
                    if (selectedDate) {
                      console.log(selectedDate);
                      setDate(selectedDate);
                    }
                  }}
                  mode="date"
                  display="compact"
                  minimumDate={new Date()}
                  accentColor="#ccc"
                />
              )} */}
              <Modal
                visible={showCalendar}
                transparent
                animationType="slide"
                onRequestClose={() => setShowCalendar(false)}
              >
                <View
                  style={{
                    backgroundColor: "red",
                    height: "50%",
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                  }}
                >
                  <View style={{ width: "100%", marginBottom: 16 }}>
                    <Pressable
                      onPress={() => setShowCalendar(false)}
                      style={{
                        backgroundColor: "rgba(218, 218, 218, 0.6)",
                        borderRadius: 9999,
                        padding: 4,
                        height: 40,
                        width: 40,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Feather name="x" size={20} color="black" />
                    </Pressable>
                  </View>
                  <Calendar />
                </View>
              </Modal>
            </View>
          </View>

          <View style={{ flexDirection: "row", gap: 12 }}>
            <View
              style={{
                width: 60,
                height: 60,
                backgroundColor: "#E9D7F5",
                borderRadius: 999,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Feather name="clock" size={24} />
            </View>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: FONT_WEIGHT.semibold,
                  color: COLORS.a_textPrimary,
                }}
              >
                Hora
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
          </View>

          <View style={{ flexDirection: "row", gap: 12 }}>
            <View
              style={{
                width: 60,
                height: 60,
                backgroundColor: "#E9D7F5",
                borderRadius: 999,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Feather name="info" size={24} />
            </View>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: FONT_WEIGHT.semibold,
                  color: COLORS.a_textPrimary,
                }}
              >
                Servicio
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
          </View>

          <View style={{ flexDirection: "row", gap: 12 }}>
            <View
              style={{
                width: 60,
                height: 60,
                backgroundColor: "#E9D7F5",
                borderRadius: 999,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Feather name="image" size={24} />
            </View>
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
          </View>
        </View>
      </View>
    </View>
  );
}
