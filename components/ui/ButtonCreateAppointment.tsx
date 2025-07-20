import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";

export const ButtonCreateAppointment = () => {
  return (
    <Link href="/(tabs)/appointment" style={style.button}>
      <Feather name="plus" size={32} color="black" />
    </Link>
  );
};

const style = StyleSheet.create({
  button: {
    marginTop: -16,
    alignSelf: "center",
    width: 62,
    height: 62,
    borderRadius: 999,
    backgroundColor: "#FF8C8C",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
