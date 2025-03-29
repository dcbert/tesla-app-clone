import { quickControlItem } from "@/models/state";
import { selectAppConfiguration } from "@/store/modules/appConfigurationSlice";
import { toggleCharge } from "@/store/modules/carSlice";
import Colors from '@/style/colors';
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";

type ItemProps = { item: quickControlItem };

const Item = ({ item }: ItemProps) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.item}>
      <Button icon={item.icon} onClick={() => dispatch(toggleCharge())} />
    </View>
  );
};
const App = () => {
  const appConfiguration = useSelector(selectAppConfiguration);

  return (
    <FlatList
      style={styles.flatList}
      data={appConfiguration.quickControls}
      horizontal={true}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listWrapper}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    width: "100%",
    height: 50,
    paddingRight: 30,
    paddingLeft: 30,
  },
  item: {
    height: 50,
  },
  title: {
    fontSize: 18,
    color: Colors.white,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  listWrapper: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
});

export default App;
