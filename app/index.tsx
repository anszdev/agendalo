import { Fontisto } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingTop: insets.top + 16,
        paddingBottom: insets.bottom,
        paddingHorizontal: 16,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Image
            source={require("@assets/images/avatar.jpg")}
            style={{ width: 50, height: 50, borderRadius: 50 }}
          />
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>Hola, Ariana</Text>
        </View>
        <Pressable>
          <Fontisto name="bell" size={24} color="black" />
        </Pressable>
      </View>

      <View>
        <View>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>Julio, 2025</Text>
        </View>
        <View>
          <Text>Lu</Text>
          <Text>Ma</Text>
          <Text>Mi</Text>
          <Text>Ju</Text>
          <Text>Vi</Text>
          <Text>Sa</Text>
          <Text>Do</Text>
        </View>
      </View>
    </View>
  );
}
