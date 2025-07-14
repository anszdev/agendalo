import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabel: "",
        tabBarStyle: {
          position: "absolute",
          borderRadius: 999,
          bottom: 16,
          width: "auto",
          height: 40,
          backgroundColor: "#fff",
          padding: 0,
        },
        tabBarIconStyle: {
          backgroundColor: "red",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: () => <Feather name="calendar" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="reports"
        options={{
          tabBarIcon: () => (
            <Feather name="file-text" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="appointment"
        options={{
          tabBarIcon: () => <Feather name="plus" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="sale"
        options={{
          tabBarIcon: () => (
            <Feather name="dollar-sign" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="clients"
        options={{
          tabBarIcon: () => <Feather name="users" size={24} color="black" />,
        }}
      />
    </Tabs>
  );
}
