"use client"
import App from "@/components/App";
import { useState } from "react";

export default function Home() {
  const [gameId, setGameId] = useState(1);
  const handlePlayAgain = () => setGameId((n) => n + 1);
  return <App key={gameId} handlePlayAgain={handlePlayAgain} />;
}
