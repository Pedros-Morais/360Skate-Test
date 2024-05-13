import React from "react";
import { Dimensions, StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

const { width } = Dimensions.get("window");

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Perfil</Text>
      </View>
      <View style={styles.profileInfo}>
        <Image
          
          style={styles.profileImage}
        />
        <Text style={styles.profileText}>Nome: Pedro Morais</Text>
        <Text style={styles.profileText}>E-mail: pedrohs.work@gmail.com</Text>
        <Text style={styles.profileText}>Idade: 18 anos</Text>
        <Text style={styles.profileText}>Localização: São Paulo, Brasil</Text>
        <TouchableOpacity style={styles.deleteButton}>
          <Text style={styles.deleteButtonText}>Deletar Conta</Text>
        </TouchableOpacity>
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
    alignItems: "center",
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  profileText: {
    fontSize: 18,
    color: "#FFF",
    marginBottom: 10,
  },
  deleteButton: {
    backgroundColor: "#FF6347",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  deleteButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
