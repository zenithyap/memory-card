import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import CardsContainer from "./components/CardsContainer";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <CardsContainer score={score} setScore={setScore} setBestScore={setBestScore} />
    </>
  );
}

export default App;
