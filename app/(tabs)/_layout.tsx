import { Fontisto } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabel: "",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: () => (
            <Fontisto name="calendar" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
