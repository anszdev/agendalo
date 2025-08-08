import { COLORS } from "@/constants/colors";
import { FONT_WEIGHT } from "@/constants/fonts";
import { Feather } from "@expo/vector-icons";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

interface ModalAppointmentProps {
  showModal: boolean;
  onToggleModal: (visible: boolean) => void;
  children: React.ReactNode;
  onSave?: () => void;
  onCancel?: () => void;
}

export const ModalAppointment = ({
  showModal,
  onToggleModal,
  children,
  onCancel,
  onSave,
}: ModalAppointmentProps) => {
  return (
    <Modal
      visible={showModal}
      transparent
      animationType="fade"
      onRequestClose={() => onToggleModal(false)}
      style={styles.modal}
    >
      <View style={styles.modalOverlay} />
      <View style={styles.modalContent}>
        <View style={styles.closeButtonContainer}>
          <Pressable
            onPress={() => {
              onToggleModal(false);
              onCancel?.();
            }}
            style={styles.closeButton}
          >
            <Feather name="x" size={20} color="black" />
          </Pressable>
        </View>

        {children}

        <View style={{ paddingHorizontal: 16, marginTop: 24 }}>
          <Pressable
            android_ripple={{
              color: "#8b33fe0e",
              borderless: true,
            }}
            onPress={() => {
              onToggleModal(false);
              onSave?.();
            }}
            style={{
              flexDirection: "row-reverse",
              alignItems: "center",
              gap: 4,
              backgroundColor: COLORS.a_primary,
              borderRadius: 999,
              justifyContent: "center",
              padding: 16,
            }}
          >
            <Text
              style={{
                fontFamily: FONT_WEIGHT.extrabold,
                fontSize: 18,
                color: COLORS.a_background,
              }}
            >
              Guardar
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
