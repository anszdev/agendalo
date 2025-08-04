import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Pressable } from "react-native";

const TabBarButton = (props: any) => {
  return (
    <Pressable {...props} android_ripple={null}>
      {props.children}
    </Pressable>
  );
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FF8C8C",
        headerShown: false,
        animation: "fade",
        tabBarStyle: {
          height: 80,
          borderTopLeftRadius: 26,
          borderTopRightRadius: 26,
          backgroundColor: "#fff",
        },
        tabBarButton: (props) => <TabBarButton {...props} />,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Agenda",
          tabBarIcon: ({ color, size }) => (
            <Feather name="calendar" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="reports"
        options={{
          title: "Reportes",
          tabBarIcon: ({ color, size }) => (
            <Feather name="file-text" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="sale"
        options={{
          title: "Ventas",
          tabBarIcon: ({ color, size }) => (
            <Feather name="dollar-sign" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
