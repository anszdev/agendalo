import { FONTS } from "@/constants/fonts";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  const [loaded] = useFonts(FONTS);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="appointment"
          options={{
            presentation: "transparentModal",
            animation: "fade_from_bottom",
            headerShown: false,
          }}
        />
      </Stack>
      <StatusBar style="dark" translucent />
    </>
  );
}
