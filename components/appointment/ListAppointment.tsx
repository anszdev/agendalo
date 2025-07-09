import { Fontisto } from "@expo/vector-icons";
import { Image, ScrollView, Text, View } from "react-native";

export const ListAppointment = () => {
  return (
    <View
      style={{
        marginTop: 36,
        borderWidth: 1,
        borderColor: "#ccc",
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        height: 800,
        paddingHorizontal: 16,
        paddingVertical: 24,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <Text style={{ fontSize: 24 }}>Martes 2</Text>
        <Text style={{ fontSize: 16 }}>3 citas</Text>
      </View>
      <ScrollView>
        <View style={{ flexDirection: "row", gap: 16 }}>
          <View style={{ width: "auto" }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>11:00</Text>
            <Text style={{ fontSize: 14, alignSelf: "flex-end" }}>AM</Text>
          </View>
          <View
            style={{
              borderTopWidth: 1,
              flex: 1,
              marginTop: 6,
              borderColor: "#ccc",
              paddingTop: 16,
              paddingBottom: 24,
              gap: 12,
            }}
          >
            <View
              style={{
                padding: 6,
                borderRadius: 9999,
                backgroundColor: "#FADADD",
                flexDirection: "row",
                gap: 12,
                alignItems: "center",
              }}
            >
              <Image
                source={require("@assets/images/avatar.jpg")}
                style={{ width: 70, height: 70, borderRadius: 9999 }}
              />
              <View>
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                  Tulio Treviño
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 4,
                    alignItems: "center",
                  }}
                >
                  <Fontisto name="clock" size={16} color="black" />
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    11:00
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                padding: 6,
                borderRadius: 9999,
                backgroundColor: "#A8DADC",
                flexDirection: "row",
                gap: 12,
                alignItems: "center",
              }}
            >
              <Image
                source={require("@assets/images/avatar.jpg")}
                style={{ width: 70, height: 70, borderRadius: 9999 }}
              />
              <View>
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                  Juan Carlos B
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 4,
                    alignItems: "center",
                  }}
                >
                  <Fontisto name="clock" size={16} color="black" />
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    11:15
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 16 }}>
          <View style={{ width: "auto" }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>03:00</Text>
            <Text style={{ fontSize: 14, alignSelf: "flex-end" }}>PM</Text>
          </View>
          <View
            style={{
              borderTopWidth: 1,
              flex: 1,
              marginTop: 6,
              borderColor: "#ccc",
              paddingTop: 16,
              paddingBottom: 24,
              gap: 12,
            }}
          >
            <View
              style={{
                padding: 6,
                borderRadius: 9999,
                backgroundColor: "#FBCEB1",
                flexDirection: "row",
                gap: 12,
                alignItems: "center",
              }}
            >
              <Image
                source={require("@assets/images/avatar.jpg")}
                style={{ width: 70, height: 70, borderRadius: 9999 }}
              />
              <View>
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>Juanin</Text>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 4,
                    alignItems: "center",
                  }}
                >
                  <Fontisto name="clock" size={16} color="black" />
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    03:00
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                padding: 6,
                borderRadius: 9999,
                backgroundColor: "#FFFFCC",
                flexDirection: "row",
                gap: 12,
                alignItems: "center",
              }}
            >
              <Image
                source={require("@assets/images/avatar.jpg")}
                style={{ width: 70, height: 70, borderRadius: 9999 }}
              />
              <View>
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                  Don Pool
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 4,
                    alignItems: "center",
                  }}
                >
                  <Fontisto name="clock" size={16} color="black" />
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    03:45
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
