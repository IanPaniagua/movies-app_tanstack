import { movieApi } from "@/core/api/movie-api";

    export const nowPlayingAction = async () => {
        try {
            const {data } = await movieApi.get("/now_playing");
            console.log(data);
            return [];
        } catch (error) {
            console.error(error);
            throw "Cannot fetch now playing movies";
        }
    }