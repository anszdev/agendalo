import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from "react-native";

interface ScrollSelectorProps {
  data: string[];
  initialScrollIndex: number;
  itemHeight: number;
  onScrollEnd: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;
}

export const ScrollSelector = ({
  data,
  initialScrollIndex,
  itemHeight,
  onScrollEnd,
}: ScrollSelectorProps) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(_, index) => index.toString()}
      initialScrollIndex={initialScrollIndex}
      getItemLayout={(_, index) => ({
        length: itemHeight,
        offset: itemHeight * index,
        index,
      })}
      showsVerticalScrollIndicator={false}
      snapToInterval={itemHeight}
      decelerationRate="fast"
      bounces={false}
      contentContainerStyle={{
        paddingVertical: 24,
        width: "auto",
      }}
      renderItem={({ item }) => (
        <View
          style={{
            height: itemHeight,
          }}
        >
          <Text
            style={{
              fontSize: 42,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {item}
          </Text>
        </View>
      )}
      onMomentumScrollEnd={onScrollEnd}
    />
  );
};
