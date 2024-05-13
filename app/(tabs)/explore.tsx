import { Dimensions, StyleSheet, View, Text } from "react-native";
const { width } = Dimensions.get("window");
import React from "react";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Perfil</Text>
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.profileText}>Nome: Pedro Morais</Text>
        <Text style={styles.profileText}>E-mail: pedrohs.work@gmail.com</Text>
        <Text style={styles.profileText}>Idade: 18 anos</Text>
        <Text style={styles.profileText}>Localização: São Paulo, Brasil</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: "#242A32",
    alignItems: "center",
  },
  header: {
    padding: 25,
  },
  headerText: {
    marginTop: 30,
    fontSize: 24,
    lineHeight: 45,
    color: "#FFF",
  },
  profileInfo: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#373D45",
    borderRadius: 10,
  },
  profileText: {
    fontSize: 18,
    color: "#FFF",
    marginBottom: 10,
  },
});
