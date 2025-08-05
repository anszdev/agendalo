import { COLORS } from "@/constants/colors";
import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Pressable } from "react-native";

const TabBarButton = (props: any) => {
  return (
    <Pressable
      {...props}
      android_ripple={null}
      style={{ gap: 4, justifyContent: "center", alignItems: "center" }}
    >
      {props.children}
    </Pressable>
  );
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.a_primary,
        headerShown: false,
        animation: "shift",
        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 80,
          borderRadius: 999,
          elevation: 0.3,
          height: "auto",
          paddingBottom: 10,
          paddingTop: 10,
          paddingHorizontal: 6,
          backgroundColor: "white",
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
