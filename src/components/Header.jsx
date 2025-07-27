import "../styles/header.css";
import ScoreBoard from "./ScoreBoard";

export default function Header({ score, bestScore }) {
  return (
    <header>
      <h1>Pokemon Memory Game</h1>
      <ScoreBoard score={score} bestScore={bestScore} />
    </header>
  );
}
