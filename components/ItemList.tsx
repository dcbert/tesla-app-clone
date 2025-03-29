import { appMenuItem } from "@/models/state";
import { selectAppConfiguration } from "@/store/modules/appConfigurationSlice";
import Colors from '@/style/colors';
import { Link } from "expo-router";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome6";
import { useSelector } from "react-redux";

type ItemProps = { item: appMenuItem };

const Item = ({ item }: ItemProps) =>{
  return (
  <View style={styles.item}>
    <Link href={item.href} style={styles.link}>
      <View style={styles.itemContent}>
        <FontAwesomeIcon
          name={item.icon}
          size={18}
          style={styles.icon}
          color={Colors.white}
        />
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <FontAwesomeIcon
        name={"chevron-right"}
        size={20}
        style={styles.chevron}
        color={Colors.white}
      />
    </Link>
  </View>
);}

const App = () => {
  const appConfiguration = useSelector(selectAppConfiguration);
  return (
  <FlatList
    style={styles.flatList}
    data={appConfiguration.activeMenus}
    renderItem={({ item }) => <Item item={item} />}
    keyExtractor={(item) => item.id}
  />
);}

const styles = StyleSheet.create({
  flatList: {
    width: "100%",
  },
  item: {
    width: "100%",
  },
  itemContent: {
    height: "100%",
    width: "80%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 30,
    opacity: 0.8,
  },
  chevron: {
    width: 10,
    opacity: 0.5,
  },
  link: {
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 25,
    paddingRight: 25,
  },
  title: {
    marginRight: 29,
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.white,
    paddingVertical: 10,
    paddingHorizontal: 10,
    paddingLeft: 20,
  },
});

export default App;
