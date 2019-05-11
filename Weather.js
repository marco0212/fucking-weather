import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo";
import { Ionicons } from "@expo/vector-icons";

const weatherCases = {
  Rain: {
    colors: ["#00C6FB", "#005BEA"],
    title: "Raining like a MF",
    subTitle: "For more info look outside",
    icon: "ios-rainy"
  },
  Clear: {
    colors: ["#00C6FB", "#005BEA"],
    title: "Sunny as Fuck",
    subTitle: "Go get your ass burnt",
    icon: "ios-sunny"
  },
  Thunderstorm: {
    colors: ["#00C6FB", "#005BEA"],
    title: "Thunderstorm in the house",
    subTitle: "Actually sdlfkjsdflk",
    icon: "ios-thunderstorm"
  },
  Clouds: {
    colors: ["#00C6FB", "#005BEA"],
    title: "Clouds",
    subTitle: "I know fucking boring",
    icon: "ios-cloudy"
  },
  Snow: {
    colors: ["#00C6FB", "#005BEA"],
    title: "COld as bold",
    subTitle: "Do you want to bulid a snow man?",
    icon: "ios-snow"
  },
  Drizzle: {
    colors: ["#00C6FB", "#005BEA"],
    title: "Drizzle",
    subTitle: "Is like rain, but gay",
    icon: "ios-rainy-outline"
  }
};
function Weather({ temp, weatherName }) {
  console.log(weatherName);
  return (
    <LinearGradient
      colors={weatherCases[weatherName].colors}
      style={styles.container}
    >
      <View style={styles.upper}>
        <Ionicons
          name={weatherCases[weatherName].icon}
          size={144}
          color="white"
        />
        <Text style={styles.temp}>{temp}˚</Text>
      </View>
      <View style={styles.lowwer}>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subTitle}>
          {weatherCases[weatherName].subTitle}
        </Text>
      </View>
    </LinearGradient>
  );
}
export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  temp: {
    marginTop: 10,
    fontSize: 50,
    color: "white"
  },
  lowwer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    marginBottom: 50,
    paddingLeft: 20,
    paddingRight: 20
  },
  title: {
    fontSize: 38,
    marginBottom: 10,
    color: "white"
  },
  subTitle: {
    color: "white",
    fontSize: 24
  }
});
