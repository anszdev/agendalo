import { Feather } from "@expo/vector-icons";
import { Pressable } from "react-native";

interface TabButtonProps {
  icon: "calendar" | "file-text" | "plus" | "dollar-sign" | "users";
}

export const TabButton = ({ icon }: TabButtonProps) => {
  return (
    <Pressable>
      <Feather name={icon} size={24} color="black" />
    </Pressable>
  );
};
