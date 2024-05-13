import { Image, Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { Props } from "@/interfaces/propsCardMovie.interface";
export function CardMovies({ data, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>
        {data.original_title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },
  image: {
    width: 150,
    height: 225,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
