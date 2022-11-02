import React,{Suspense, lazy, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import PokemonDetails from "./components/pokemonId";
import Pokemons from "./containers/pokemons";

function App() {
  return (
    <div>
        <Suspense fallback={<div>loading...</div>}>
            <Header />
            <Routes>
                    <Route path="/" element={<Pokemons />} />
                    <Route path="/type/:id" element={<PokemonDetails />} />
            </Routes>
        </Suspense>
    </div>
  );
}

export default App;