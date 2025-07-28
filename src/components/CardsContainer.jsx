import "../styles/card-container.css";
import { useState } from "react";
import Card from "./Card";

export default function CardsContainer({ score, setScore, setBestScore }) {
  const base = "https://pokeapi.co/api/v2/pokemon/";
  const [pokemons, setPokemons] = useState([
    "terapagos",
    "miraidon",
    "calyrex",
    "eternatus",
    "zamazenta",
    "zacian",
    "necrozma",
    "lunala",
    "solgaleo",
    "cosmoem",
    "cosmog",
    "xerneas",
  ]);
  const [clicked, setClicked] = useState([]);

  function shuffle() {
    const shuffled = [...pokemons];
    for (let i = pokemons.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));

      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setPokemons(shuffled);
  }

  function handleClick(pokemon) {
    if (clicked.includes(pokemon)) {
      setBestScore(prev => Math.max(prev, score));
      setScore(0);
      setClicked([]);
    } else {
      setScore(prev => prev + 1);
      setClicked(prev => [...prev, pokemon]);
    }
    shuffle();
  }

  return (
    <div className="card-container">
      {pokemons.map((pokemon) => (
        <Card handleClick={() => handleClick(pokemon)} url={base + pokemon} />
      ))}
    </div>
  );
}
