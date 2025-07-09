import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ListAppointment } from "@/components/appointment/ListAppointment";
import { Calendar } from "@/components/calendar/Calendar";
import { Header } from "@/components/ui/Header";

export default function Index() {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingTop: insets.top + 16,
        paddingBottom: insets.bottom,
      }}
    >
      <Header />

      <Calendar />

      <ListAppointment />
    </View>
  );
}
