import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const Pokemon = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    console.log(name);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => {
        setPokemon(res.data);
      })
      .catch((e) => console.error(e));
  }, [name]);
  return (
    <div>
      <h3>{pokemon.name}</h3>
      <img
        alt={pokemon.name}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${pokemon.id}.png`}
      />
    </div>
  );
};

export default Pokemon;
