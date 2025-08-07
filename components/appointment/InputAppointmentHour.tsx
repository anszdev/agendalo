import { COLORS } from "@/constants/colors";
import { FONT_WEIGHT } from "@/constants/fonts";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
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

  const initialScrollIndex = 0;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Hora</Text>
      <Text onPress={() => setShowCalendar(true)} style={styles.dateText}>
        {`${hour.hour}:${hour.minute} ${hour.amPm}`}
      </Text>
      <Modal
        visible={showCalendar}
        transparent
        animationType="fade"
        onRequestClose={() => setShowCalendar(false)}
        style={styles.modal}
      >
        <View style={styles.modalOverlay} />
        <View style={styles.modalContent}>
          <View style={styles.closeButtonContainer}>
            <Pressable
              onPress={() => setShowCalendar(false)}
              style={styles.closeButton}
            >
              <Feather name="x" size={20} color="black" />
            </Pressable>
          </View>

          <View
            style={{
              height: 120,
              marginHorizontal: 40,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ScrollSelector
              data={hours.map((h) => h.toString().padStart(2, "0"))}
              initialScrollIndex={initialScrollIndex}
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

            <Text
              style={{
                fontSize: 70,
                fontWeight: "bold",
                color: COLORS.a_textPrimary,
                marginBottom: 32,
              }}
            >
              :
            </Text>

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

          <View />
        </View>
      </Modal>
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
  modal: {
    position: "relative",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "#00000066",
  },
  modalContent: {
    position: "absolute",
    zIndex: 100,
    bottom: 0,
    width: "100%",
    backgroundColor: COLORS.a_background,
    paddingTop: 24,
    paddingBottom: 24,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButtonContainer: {
    width: "100%",
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  closeButton: {
    backgroundColor: "rgba(218, 218, 218, 0.6)",
    borderRadius: 9999,
    padding: 4,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
