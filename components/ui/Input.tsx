import { COLORS } from "@/constants/colors";
import { FONT_WEIGHT } from "@/constants/fonts";
import { Text, TextInput, View } from "react-native";

interface InputProps {
  placeholder?: string;
  value?: string;
  onChangeText: (text: string) => void;
  fontSize?: number;
  label: string;
}

export const Input = ({
  fontSize = 22,
  onChangeText,
  placeholder,
  value,
  label,
}: InputProps) => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text
        style={{
          fontSize: 18,
          fontFamily: FONT_WEIGHT.semibold,
          color: COLORS.a_textPrimary,
        }}
      >
        {label}
      </Text>
      <TextInput
        style={{
          fontSize: fontSize,
          fontFamily: FONT_WEIGHT.bold,
          textTransform: "capitalize",
          padding: 0,
        }}
        placeholder={placeholder}
        placeholderTextColor="#eee"
        cursorColor={COLORS.a_textPrimary}
        underlineColorAndroid="transparent"
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};
