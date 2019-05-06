import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo";
export default class Weather extends Component {
  render() {
    return (
      <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}>
        <View style={styles.upper}>
          <Text>Icon Here!</Text>
          <Text style={styles.temp}>40˚</Text>
        </View>
        <View style={styles.lowwer}>
          <Text style={styles.title}>Title Here!</Text>
          <Text style={styles.subTitle}>subTitle Here!</Text>
        </View>
      </LinearGradient>
    );
  }
}
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
    fontSize: 38,
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
