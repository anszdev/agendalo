import { FONT_WEIGHT } from "@/constants/fonts";
import { Fontisto } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";

export const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.header_user}>
        <Image
          source={require("@assets/images/avatar.jpg")}
          style={styles.user_image}
        />
        <Text style={styles.user_name}>Hola, Ari</Text>
      </View>
      <Pressable style={styles.notify_button}>
        <Fontisto name="bell" size={24} color="black" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  header_user: { flexDirection: "row", alignItems: "center", gap: 8 },
  user_image: { width: 50, height: 50, borderRadius: 50 },
  user_name: { fontSize: 22, fontFamily: FONT_WEIGHT.extrabold },
  notify_button: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 6,
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9999,
  },
});
