import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Appointment() {
  return (
    <View
      style={{
        height: "90%",
        backgroundColor: "#fff",
        marginTop: 60,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        paddingHorizontal: 16,
        paddingVertical: 24,
      }}
    >
      <View style={{ flex: 1 }}>
        <View style={{ width: "100%" }}>
          <Pressable
            onPress={() => router.dismiss()}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.6)",
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
        <Text style={{ fontSize: 18 }}>Appointment Component</Text>
      </View>
    </View>
  );
}
