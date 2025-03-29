import Car3d from "@/components/Car3d";
import Header from "@/components/Header";
import ItemList from "@/components/ItemList";
import QuickControls from "@/components/QuickControls";
import VerticalComponentList from "@/components/VerticalComponentList";
import type { ItemData } from "@/models/definitions";
import { store } from "@/store/store";
import Colors from '@/style/colors';
import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";

export default function HomeScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const components: ItemData[] = [
    {
      id: "QuickControls",
      component: <QuickControls />,
    },
    {
      id: "ItemList",
      component: <ItemList />,
    },
  ];
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.backgroundPrimary}}>
        <View style={styles.container}>
          <Header></Header>
          <Car3d />
          <VerticalComponentList components={components} />
        </View>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor:  Colors.backgroundPrimary,
  },
});
