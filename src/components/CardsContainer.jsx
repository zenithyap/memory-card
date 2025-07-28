import "../styles/card-container.css";
import Card from "./Card";

export default function CardsContainer() {
  const base = "https://pokeapi.co/api/v2/pokemon/";
  const pokemons = [
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
		"xerneas"
  ];

  return (
    <div className="card-container">
      {pokemons.map((pokemon) => <Card url={base + pokemon} />)}
    </div>
  );
}
