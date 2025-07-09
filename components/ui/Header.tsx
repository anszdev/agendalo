import { Fontisto } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Pressable, Text, View } from "react-native";

export const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        <Image
          source={require("@assets/images/avatar.jpg")}
          style={{ width: 50, height: 50, borderRadius: 50 }}
        />
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Hola, Ari</Text>
      </View>
      <Pressable>
        <Fontisto name="bell" size={24} color="black" />
      </Pressable>
    </View>
  );
};
