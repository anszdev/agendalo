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

const AddAppointmentButton = (props: any) => {
  return (
    <Pressable
      {...props}
      android_ripple={null}
      style={{
        backgroundColor: "red",
        width: 64,
        height: 64,
        borderRadius: 32,
        justifyContent: "center",
        alignItems: "center",
        marginTop: -6,
      }}
    >
      <Feather name="plus" size={32} color="black" />
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
      <Tabs.Screen
        name="appointment"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="plus" size={size} color={color} />
          ),
          tabBarButton: (props) => <AddAppointmentButton {...props} />,
        }}
      />
    </Tabs>
  );
}
