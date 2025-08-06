import { InputAppointment } from "@/components/appointment/InputAppointment";
import { InputAppointmentDate } from "@/components/appointment/InputAppointmentDate";
import { Input } from "@/components/ui/Input";
import { COLORS } from "@/constants/colors";
import { FONT_WEIGHT } from "@/constants/fonts";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, Text, TextInput, View } from "react-native";

export default function Appointment() {
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
              }}
              placeholder="Nombre del cliente"
              placeholderTextColor="#ddd"
              cursorColor={COLORS.a_textPrimary}
              underlineColorAndroid={"transparent"}
            />
          </View>

          <InputAppointment icon="phone">
            <Input
              label="Teléfono"
              inputMode="tel"
              onChangeText={(text) => console.log(text)}
            />
          </InputAppointment>

          <InputAppointment icon="calendar">
            <InputAppointmentDate />
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
