import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ListAppointment } from "@/components/appointment/ListAppointment";
import { Calendar } from "@/components/calendar/Calendar";
import { Header } from "@/components/ui/Header";

export default function Index() {
  return (
    <SafeAreaView>
      <View
        style={{
          paddingTop: 16,
        }}
      >
        <Header />

        <Calendar />

        <ListAppointment />
      </View>
    </SafeAreaView>
  );
}
