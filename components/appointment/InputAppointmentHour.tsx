import { COLORS } from "@/constants/colors";
import { FONT_WEIGHT } from "@/constants/fonts";
import { Time } from "@/types/calendar";
import { useState } from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ModalAppointment } from "./ModalAppointment";
import { ScrollSelector } from "./ScrollSelector";

interface InputAppointmentDateProps {
  selectedTime: Time;
  tempTime: Time;
  setTempTime: (prev: Time | ((prev: Time) => Time)) => void;
  onSave: () => void;
}

const ITEM_HEIGHT = 82;

const HOURS = Array.from({ length: 12 }, (_, i) =>
  (i + 1).toString().padStart(2, "0")
);
const MINUTES = ["00", "15", "30", "45"];
const AM_PM = ["AM", "PM"];

const getIndexFromValue = (array: string[], value: string) =>
  Math.max(0, array.indexOf(value));

const calculateScrollIndex = (e: NativeSyntheticEvent<NativeScrollEvent>) =>
  Math.round(e.nativeEvent.contentOffset.y / ITEM_HEIGHT);

export const InputAppointmentHour = ({
  onSave,
  selectedTime,
  setTempTime,
  tempTime,
}: InputAppointmentDateProps) => {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Hora</Text>
      <Text
        onPress={() => {
          setTempTime(selectedTime);
          setShowCalendar(true);
        }}
        style={styles.dateText}
      >
        {`${selectedTime.hour}:${selectedTime.minute} ${selectedTime.amPm}`}
      </Text>
      <ModalAppointment
        showModal={showCalendar}
        onToggleModal={setShowCalendar}
        onSave={onSave}
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
            data={HOURS.map((h) => h.toString().padStart(2, "0"))}
            initialScrollIndex={getIndexFromValue(HOURS, tempTime.hour)}
            itemHeight={ITEM_HEIGHT}
            onScrollEnd={(e) => {
              const index = calculateScrollIndex(e);
              const hour = HOURS[index % HOURS.length];
              setTempTime((prev) => ({
                ...prev,
                hour: hour.toString().padStart(2, "0"),
              }));
            }}
          />

          <Text style={styles.clockSeparator}>:</Text>

          <ScrollSelector
            data={MINUTES}
            initialScrollIndex={getIndexFromValue(MINUTES, tempTime.minute)}
            itemHeight={ITEM_HEIGHT}
            onScrollEnd={(e) => {
              const index = calculateScrollIndex(e);
              const minute = MINUTES[index % MINUTES.length];
              setTempTime((prev) => ({ ...prev, minute }));
            }}
          />

          <ScrollSelector
            data={AM_PM}
            initialScrollIndex={getIndexFromValue(AM_PM, tempTime.amPm)}
            itemHeight={ITEM_HEIGHT}
            onScrollEnd={(e) => {
              const index = calculateScrollIndex(e);
              const amPm = AM_PM[index % AM_PM.length] as "AM" | "PM";
              setTempTime((prev) => ({ ...prev, amPm }));
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
