import { ListAppointment } from "@/components/appointment/ListAppointment";
import { Calendar } from "@/components/calendar/Calendar";
import { Header } from "@/components/ui/Header";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <LinearGradient
        colors={["#FDEBEB", "#E9D7F5", "#D5E8F7"]}
        locations={[0, 0.5, 1]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{
          height: 250,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 0,
        }}
      />
      <View>
        <LinearGradient
          colors={["#FDEBEB", "#E9D7F5", "#D5E8F7"]}
          locations={[0, 0.5, 1]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{
            paddingVertical: 16,
          }}
        >
          <Header />
          <Calendar />
        </LinearGradient>

        <ListAppointment />
      </View>
    </SafeAreaView>
  );
}
