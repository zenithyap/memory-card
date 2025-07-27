import "../styles/scoreBoardContainer.css";

export default function ScoreBoard({ score, bestScore }) {
  return (
    <div className="score-board-container">
      <p>Score: {score}</p>
      <p>Best Score: {bestScore}</p>
    </div>
  );
}
