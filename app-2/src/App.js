import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import PokemonList from "./components/PokemonList";
function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=9")
      .then((res) => setPokemon(res.data.results));
  }, []);
  return (
    <div className="App-header">
      {pokemon.map((pokemon, index) => {
        return <PokemonList pokemon={pokemon} key={index} />;
      })}
    </div>
  );
}

export default App;
