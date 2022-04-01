import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonList from "./components/PokemonList";
import Pokemon from "./components/Pokemon";
function App() {
  return (
    <div className="App-header">
      <Router>
        <Routes>
          <Route exact path="/" element={<PokemonList />} />
          <Route path="/pokemon/:name" element={<Pokemon />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
