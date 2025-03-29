import type {
  ItemData,
  ItemProps,
  VerticalComponentListProps,
} from "@/models/definitions";
import React from "react";
import { FlatList, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Item = ({ item }: ItemProps) => (
  <View style={[styles.item]}>{item.component}</View>
);

const VerticalComponentList = ({ components }: VerticalComponentListProps) => {
  const renderItem = ({ item }: { item: ItemData }) => {
    return <Item item={item} />;
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={components}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {},
  title: {
    fontSize: 32,
  },
});

export default VerticalComponentList;
