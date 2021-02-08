import { HomePage } from "./pages/HomePage";
import pokemonData from "./data/card-data.json";

export const App = () => {
  return (
    <>
      <HomePage pokemonList={pokemonData.pokemon} />
    </>
  );
};
