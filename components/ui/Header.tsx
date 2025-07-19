import { FONT_WEIGHT } from "@/constants/fonts";
import { viewCalendarType } from "@/types/calendar";
import Feather from "@expo/vector-icons/Feather";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

interface HeaderProps {
  viewCalendar: viewCalendarType;
  toggleViewCalendar: (viewCalendar: viewCalendarType) => void;
}

export const Header = ({ viewCalendar, toggleViewCalendar }: HeaderProps) => {
  const positionActive = useSharedValue(2);
  const animateStyle = useAnimatedStyle(() => {
    return {
      left: positionActive.value,
    };
  });

  const handleToggleViewCalendar = () => {
    positionActive.value = withSpring(viewCalendar === "month" ? 4 : 36, {
      damping: 20,
      stiffness: 150,
    });
    toggleViewCalendar(viewCalendar === "week" ? "month" : "week");
  };

  return (
    <View style={styles.header}>
      <View style={styles.header_user}>
        <Image
          source={require("@assets/images/avatar.jpg")}
          style={styles.user_image}
        />
        <Text style={styles.user_name}>Hola, Ari</Text>
      </View>
      <Pressable
        style={styles.view_calendar_toggle}
        onPress={handleToggleViewCalendar}
      >
        <Animated.View
          style={[styles.view_calendar_button_active, animateStyle]}
        />
        <Feather
          name="list"
          size={20}
          color="black"
          style={styles.view_calendar_button}
        />
        <Feather
          name="grid"
          size={20}
          color="black"
          style={styles.view_calendar_button}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  header_user: { flexDirection: "row", alignItems: "center", gap: 8 },
  user_image: { width: 50, height: 50, borderRadius: 50 },
  user_name: { fontSize: 22, fontFamily: FONT_WEIGHT.extrabold },
  view_calendar_toggle: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9999,
    position: "relative",
    padding: 4,
  },
  view_calendar_button: {
    padding: 6,
  },
  view_calendar_button_active: {
    width: 33.5,
    height: 33.5,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 6,
    position: "absolute",
    borderRadius: 9999,
    left: 2,
  },
});
