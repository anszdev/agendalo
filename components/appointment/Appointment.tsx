import { FONT_WEIGHT } from "@/constants/fonts";
import { Feather } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";

interface AppointmentProps {
  name: string;
  time: string;
}

export const Appointment = ({ name, time }: AppointmentProps) => {
  return (
    <View
      style={{
        padding: 8,
        borderRadius: 9999,
        backgroundColor: "#FADADD",
        flexDirection: "row",
        gap: 12,
        alignItems: "center",
      }}
    >
      <Image
        source={require("@assets/images/avatar.jpg")}
        style={{
          width: 70,
          height: 70,
          borderRadius: 9999,
          borderWidth: 2,
          borderColor: "#fff",
        }}
      />
      <View>
        <Text style={{ fontSize: 24, fontFamily: FONT_WEIGHT.bold }}>
          {name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
          }}
        >
          <Feather name="clock" size={16} color="black" />
          <Text style={{ fontSize: 16, fontFamily: FONT_WEIGHT.semibold }}>
            {time}
          </Text>
        </View>
      </View>
    </View>
  );
};
