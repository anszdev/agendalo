import { FONT_WEIGHT } from "@/constants/fonts";
import { Feather, Fontisto } from "@expo/vector-icons";
import { Image, ScrollView, Text, View } from "react-native";
import { Appointment } from "./Appointment";
import { AppointmentHours } from "./AppointmentHours";

export const ListAppointment = () => {
  return (
    <View
      style={{
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        paddingHorizontal: 16,
        paddingVertical: 24,
        zIndex: 2,
        position: "relative",
        backgroundColor: "#fff",
        marginTop: -24,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <Text style={{ fontSize: 24, fontFamily: FONT_WEIGHT.bold }}>
          Martes 2
        </Text>
        <Text style={{ fontSize: 18, fontFamily: FONT_WEIGHT.semibold }}>
          3 citas
        </Text>
      </View>
      <ScrollView>
        <AppointmentHours hour="11:00" amPm="AM">
          <Appointment name="Tulio Treviño" time="11:00" />
          <Appointment name="Tulio Treviño" time="11:00" />
          <Appointment name="Tulio Treviño" time="11:00" />
          <Appointment name="Tulio Treviño" time="11:00" />
        </AppointmentHours>
        <View style={{ flexDirection: "row", gap: 16 }}>
          <View style={{ width: "auto" }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>03:00</Text>
            <Text style={{ fontSize: 14, alignSelf: "flex-end" }}>PM</Text>
          </View>
          <View
            style={{
              borderTopWidth: 1,
              flex: 1,
              marginTop: 6,
              borderColor: "#ccc",
              paddingTop: 16,
              paddingBottom: 24,
              gap: 12,
            }}
          >
            <View
              style={{
                padding: 6,
                borderRadius: 9999,
                backgroundColor: "#FBCEB1",
                flexDirection: "row",
                gap: 12,
                alignItems: "center",
              }}
            >
              <Image
                source={require("@assets/images/avatar.jpg")}
                style={{ width: 70, height: 70, borderRadius: 9999 }}
              />
              <View>
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>Juanin</Text>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 4,
                    alignItems: "center",
                  }}
                >
                  <Feather name="clock" size={16} color="black" />
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    03:00
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                padding: 6,
                borderRadius: 9999,
                backgroundColor: "#FFFFCC",
                flexDirection: "row",
                gap: 12,
                alignItems: "center",
              }}
            >
              <Image
                source={require("@assets/images/avatar.jpg")}
                style={{ width: 70, height: 70, borderRadius: 9999 }}
              />
              <View>
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                  Don Pool
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 4,
                    alignItems: "center",
                  }}
                >
                  <Fontisto name="clock" size={16} color="black" />
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    03:45
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
