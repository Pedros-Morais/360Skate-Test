
import { api } from "./configApi";
const apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYTNhYmM5MjViY2VmZTZlYjg0ZGM1MDBhNzgwNWFjNyIsInN1YiI6IjY2NDAxM2Q0NTU5NjAxOWE1ZDdlYWYzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HJr7pEqyibQchznaAHcZh3-5GHdjmHkzAYdWIck1AQE";
export const getMovies = async () => {
  try {
   

    const response = await api.get("/discover/movie", {
      params: {
        api_key: apiKey
      },
      headers: {
        "Authorization": `Bearer ${apiKey}`
      }
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao obter detalhes do filme:", error);
    throw error;
  }
};
export const getMovieById = async (id: number) => {
  try {
    const response = await api.get(`/movie/${id}`, {
      params: {
        api_key: apiKey
      },
      headers: {
        "Authorization": `Bearer ${apiKey}`
      }
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao obter detalhes do filme:", error);
    throw error; 
  }
}

    