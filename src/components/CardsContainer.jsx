import "../styles/card-container.css";
import { useState, useEffect } from "react";
import Card from "./Card";
import { shuffle } from "../helper";

export default function CardsContainer({ score, setScore, setBestScore }) {
  const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
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

  useEffect(() => setPokemons(prev => shuffle(prev)), []);

  function handleClick(pokemon) {
    if (clicked.includes(pokemon)) {
      setBestScore((prev) => Math.max(prev, score));
      setScore(0);
      setClicked([]);
    } else {
      setScore((prev) => prev + 1);
      setClicked((prev) => [...prev, pokemon]);
    }
    setPokemons(prev => shuffle(prev));
  }

  return (
    <div className="card-container">
      {pokemons.map((pokemon) => (
        <Card handleClick={() => handleClick(pokemon)} url={baseUrl + pokemon} />
      ))}
    </div>
  );
}
