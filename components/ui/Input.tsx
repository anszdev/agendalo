import { COLORS } from "@/constants/colors";
import { FONT_WEIGHT } from "@/constants/fonts";
import {
  InputModeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

interface InputProps {
  placeholder?: string;
  value?: string;
  onChangeText: (text: string) => void;
  label: string;
  inputMode?: InputModeOptions;
}

export const Input = ({
  onChangeText,
  placeholder,
  value,
  label,
  inputMode = "text",
}: InputProps) => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#eee"
        cursorColor={COLORS.a_textPrimary}
        underlineColorAndroid="transparent"
        onChangeText={onChangeText}
        value={value}
        inputMode={inputMode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: FONT_WEIGHT.semibold,
    color: COLORS.a_textPrimary,
  },
  input: {
    fontSize: 22,
    fontFamily: FONT_WEIGHT.bold,
    textTransform: "capitalize",
    padding: 0,
    paddingBottom: 4,
    width: "auto",
    borderBottomWidth: 2,
    borderBottomColor: COLORS.a_textPrimary,
    color: "#000",
  },
});
