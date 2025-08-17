import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  nowPlayingAction();
  return <Stack />;
}
