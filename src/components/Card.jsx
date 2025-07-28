import "../styles/card.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Card({ url }) {
  const [name, setName] = useState("");
  const [sprite, setSprite] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(url);
      const data = res.data;
      setName(data.species.name);
      setSprite(data.sprites.front_default);
    }

    fetchData();
  }, [url]);

  return (
    <div className="card">
      <img src={sprite} alt="" />
      <p>{name}</p>
    </div>
  );
}
