import { selectCarInfo } from "@/store/modules/carSlice";
import { Link } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome6";
import { useSelector } from "react-redux";
import Colors from '@/style/colors';

const VehicleStatus = () => {
  const carInfo = useSelector(selectCarInfo);
  let batteryIcon = ''
  let batteryColor = Colors.green
  if(carInfo.batteryPercentage>90){
    batteryIcon = 'battery-full'
  } else if (carInfo.batteryPercentage>70){
    batteryIcon = 'battery-three-quarters'
  } else if (carInfo.batteryPercentage>40){
    batteryIcon = 'battery-half'
  } else if (carInfo.batteryPercentage>25){
    batteryIcon = 'battery-quarter'
  } else {
    batteryIcon = 'battery-empty'
    batteryColor= Colors.red
  }
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{carInfo.name}</Text>
        <View style={styles.statusRow}>
          <FontAwesome name={batteryIcon} size={14} color={batteryColor} />
          <Text style={styles.miles}> {carInfo.remainingRange} mi </Text>
          {carInfo.isCharging &&<FontAwesome name="bolt" size={14} color={Colors.yellow} />}
        </View>
        {carInfo.isCharging && (
          <Text style={styles.subtitle}>
            Charging vehicle
          </Text>
        )}
      </View>

      <View style={styles.avatarContainer}>
        <Link href="user">
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }} // Replace with actual avatar
            style={styles.avatar}
          />
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  miles: {
    color: Colors.white,
    fontSize: 14,
  },
  subtitle: {
    color:Colors.grey,
    fontSize: 12,
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});

export default VehicleStatus;
