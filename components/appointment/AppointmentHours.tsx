import { FONT_WEIGHT } from "@/constants/fonts";
import { Text, View } from "react-native";

interface AppointmentHoursProps {
  hour: string;
  amPm: string;
  children: React.ReactNode;
}

export const AppointmentHours = ({
  amPm,
  children,
  hour,
}: AppointmentHoursProps) => {
  return (
    <View style={{ flexDirection: "row", gap: 16 }}>
      <View style={{ width: "auto" }}>
        <Text style={{ fontSize: 18, fontFamily: FONT_WEIGHT.semibold }}>
          {hour}
        </Text>
        <Text
          style={{
            fontSize: 14,
            alignSelf: "flex-end",
            fontFamily: FONT_WEIGHT.medium,
            textTransform: "uppercase",
          }}
        >
          {amPm}
        </Text>
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
        {children}
      </View>
    </View>
  );
};
