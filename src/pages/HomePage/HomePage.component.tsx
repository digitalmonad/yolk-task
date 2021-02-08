import React, { FC } from "react";

import { Hero } from "../../components/layout/Hero";
import { PokemonCard } from "../../components/pokemon/PokemonCard/PokemonCard.component";
import { PokemonT } from "../../models/pokemon.model";

type HomePagePropsT = {
  pokemonList: PokemonT[];
};

export const HomePage: FC<HomePagePropsT> = ({ pokemonList }) => (
  <div>
    <Hero />
    <div className='container mx-auto p-4 '>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-12 '>
        {pokemonList.map((pokemon) => (
          <div key={pokemon.name} className='sm:-mt-8 cursor-pointer'>
            <PokemonCard {...{ ...pokemon }} />
          </div>
        ))}
      </div>
    </div>
  </div>
);
