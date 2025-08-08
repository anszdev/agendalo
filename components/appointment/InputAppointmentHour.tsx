import { COLORS } from "@/constants/colors";
import { FONT_WEIGHT } from "@/constants/fonts";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ModalAppointment } from "./ModalAppointment";
import { ScrollSelector } from "./ScrollSelector";

const ITEM_HEIGHT = 82; // Altura de cada número

export const InputAppointmentHour = () => {
  const [hour, setHour] = useState({
    hour: "10",
    minute: "00",
    amPm: "AM",
  });
  const [showCalendar, setShowCalendar] = useState(false);

  const hours = Array.from({ length: 12 }, (_, i) => i + 1); // 0 al 23

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Hora</Text>
      <Text onPress={() => setShowCalendar(true)} style={styles.dateText}>
        {`${hour.hour}:${hour.minute} ${hour.amPm}`}
      </Text>
      <ModalAppointment
        showModal={showCalendar}
        onToggleModal={setShowCalendar}
      >
        <View
          style={{
            height: 120,
            marginHorizontal: 60,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 6,
          }}
        >
          <ScrollSelector
            data={hours.map((h) => h.toString().padStart(2, "0"))}
            initialScrollIndex={9}
            itemHeight={ITEM_HEIGHT}
            onScrollEnd={(e) => {
              const index = Math.round(
                e.nativeEvent.contentOffset.y / ITEM_HEIGHT
              );
              const hour = hours[index % hours.length];
              setHour((prev) => ({
                ...prev,
                hour: hour.toString().padStart(2, "0"),
              }));
            }}
          />

          <Text style={styles.clockSeparator}>:</Text>

          <ScrollSelector
            data={["00", "15", "30", "45"]}
            initialScrollIndex={0}
            itemHeight={ITEM_HEIGHT}
            onScrollEnd={(e) => {
              const index = Math.round(
                e.nativeEvent.contentOffset.y / ITEM_HEIGHT
              );
              const minute = ["00", "15", "30", "45"][index % 4];
              setHour((prev) => ({ ...prev, minute }));
            }}
          />

          <ScrollSelector
            data={["AM", "PM"]}
            initialScrollIndex={0}
            itemHeight={ITEM_HEIGHT}
            onScrollEnd={(e) => {
              const index = Math.round(
                e.nativeEvent.contentOffset.y / ITEM_HEIGHT
              );
              const amPm = ["AM", "PM"][index % 2];
              setHour((prev) => ({ ...prev, amPm }));
            }}
          />
        </View>
      </ModalAppointment>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
    fontFamily: FONT_WEIGHT.semibold,
    color: COLORS.a_textPrimary,
  },
  dateText: {
    fontSize: 22,
    fontFamily: FONT_WEIGHT.bold,
    padding: 0,
    paddingBottom: 4,
    width: "auto",
    borderBottomWidth: 2,
    borderBottomColor: COLORS.a_textPrimary,
  },
  clockSeparator: {
    fontSize: 70,
    fontWeight: "bold",
    color: COLORS.a_textPrimary,
    marginBottom: 32,
  },
});
