import { Feather } from "@expo/vector-icons";
import { View } from "react-native";

interface InputAppointmentProps {
  children: React.ReactNode;
  icon?: "phone" | "calendar" | "clock" | "dollar-sign" | "image";
  color?: string;
}

export const InputAppointment = ({
  children,
  color = "#E9D7F5",
  icon,
}: InputAppointmentProps) => {
  return (
    <View style={{ flexDirection: "row", gap: 12 }}>
      <View
        style={{
          width: 60,
          height: 60,
          backgroundColor: color,
          borderRadius: 999,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Feather name={icon} size={24} />
      </View>
      {children}
    </View>
  );
};
