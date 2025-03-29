import Colors from '@/style/colors';
import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function ChargeStats() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Schedule",
          headerStyle: { backgroundColor: Colors.backgroundPrimary },
          headerTintColor:Colors.white,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Text>Schedule</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
