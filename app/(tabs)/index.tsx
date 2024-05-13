import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, Image, ScrollView } from "react-native";
import { CardMovies } from "@/components/CardMovies";
import { getMovies } from "@/service/api";
import { Genre } from "@/interfaces/genre.interface";
import { Movie } from "@/interfaces/movie.interface";
const { width } = Dimensions.get("window");








export default function HomeScreen() {
  const [movieData, setMovieData] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
const [selectedGenre, setSelectedGenre] = useState<number | null>(0);
  useEffect(() => {
    loadMoreData();
  }, []);

  function loadMoreData() {
    getMovies().then((response) => {
      setMovieData(response.results);
    });
  }
  function formatedDate(date: string) {
    return new Date(date).toLocaleDateString();
  }
  function showMovieDetails(movie: Movie) {
    setSelectedMovie(movie);
    setModalVisible(true);
  }
  const genres: Genre[] = [
    { id: 0, name: "Todos" },
    { id: 28, name: "Ação" },
    { id: 35, name: "Comédia" },
  ];


  function closeModal() {
    setSelectedMovie(null); 
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>360Movies</Text>
      </View>
      <View style={styles.genreButtons}>
        {genres.map((genre) => (
          <TouchableOpacity
            key={genre.id}
            style={[
              styles.genreButton,
              selectedGenre === genre.id && styles.selectedGenreButton,
            ]}
            onPress={() => setSelectedGenre(genre.id)}
          >
            <Text style={styles.genreButtonText}>{genre.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.flatList}>
        <ScrollView>
        <FlatList
          data={movieData}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => showMovieDetails(item)}>
              <CardMovies data={item} 
              onPress={
                () => {
                  showMovieDetails(item)
                }
              }
              />
            </TouchableOpacity>
          )}
          onEndReached={loadMoreData}
          onEndReachedThreshold={0.1}
          ListEmptyComponent={
            <Text style={styles.noResult}>Nenhum filme encontrado</Text>
          }
        />
         </ScrollView>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedMovie && (
              <>
                <Text style={styles.modalTitle}>{selectedMovie.title}</Text>
                <Text style={styles.dateText}>Data de lancamento:{formatedDate(selectedMovie.release_date)}</Text>
                <Image
                  source={{ uri: `https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}` }}
                  style={styles.modalImage}
                  resizeMode="cover"
                />
                <Text style={styles.modalOverview}>{selectedMovie.overview}</Text>
                <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                  <Text style={styles.closeButtonText}>Fechar</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
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
  noResult: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    marginVertical: 10,
  },
  flatList: {
    flex: 1,
    width: "100%",
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
  dateText: {
    color: "#000",
    fontSize: 16,
    textAlign: "center",
    padding: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 40,
    marginHorizontal: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalImage: {
    width: 250,
    height: 250,
    marginBottom: 10,
  },
  modalOverview: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: "#242A32",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: 200,
    display: "flex",
    alignItems: "center",

  },
  closeButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  genreButtons: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  genreButton: {
    backgroundColor: "#67686D",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginHorizontal: 8,
  },
  selectedGenreButton: {
    backgroundColor: "#2F80ED",
  },
  genreButtonText: {
    color: "#FFF",
  },
});
