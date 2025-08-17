import axios from "axios";

export const movieApi = axios.create({
    baseURL: process.env.EXPO_PUBLIC_MOVIE_DB_URL,
    params: {
        language: "en-US",
        api_key: process.env.EXPO_PUBLIC_DB_API_KEY,
    },
});

// export const getNowPlayingMovies = async () => {
//     const response = await movieApi.get("/movie/now_playing");
//     return response.data;
// };

// export const getMovieDetails = async (movieId: string) => {
//     const response = await movieApi.get(`/movie/${movieId}`);
//     return response.data;
// };