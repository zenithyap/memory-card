import "../styles/card-container.css";
import { useState } from "react";
import Card from "./Card";

export default function CardsContainer() {
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

  function shuffle() {
    const shuffled = [...pokemons];
    for (let i = pokemons.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));

      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setPokemons(shuffled);
  }

  return (
    <div className="card-container">
      {pokemons.map((pokemon) => (
        <Card handleClick={shuffle} url={base + pokemon} />
      ))}
    </div>
  );
}
