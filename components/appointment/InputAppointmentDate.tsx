import { daySelectedAtom } from "@/atoms/calendar";
import { COLORS } from "@/constants/colors";
import { FONT_WEIGHT } from "@/constants/fonts";
import { Feather } from "@expo/vector-icons";
import { format } from "@formkit/tempo";
import { useAtom } from "jotai";
import { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { Calendar } from "../calendar/Calendar";

export const InputAppointmentDate = () => {
  const [dateSelected] = useAtom(daySelectedAtom);
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Fecha</Text>
      <Text onPress={() => setShowCalendar(true)} style={styles.dateText}>
        {format(
          new Date(
            dateSelected.year,
            dateSelected.month,
            dateSelected.day ?? 1
          ),
          "long",
          "es"
        )}
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
          <Calendar />
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
