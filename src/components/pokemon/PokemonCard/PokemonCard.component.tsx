import React, { FC } from "react";

import { PokemonT } from "../../../models/pokemon.model";
import styles from "./PokemonCard.style.module.scss";

type PokemonCardPropsT = PokemonT;

export const PokemonCard: FC<PokemonCardPropsT> = ({
  name,
  moves,
  image,
  stats,
}) => {
  const capitalizedName =
    name.length > 1 && name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <div
      className={`bg-white shadow-md sm:shadow-xl hover:shadow-md rounded-lg transition-all p-3`}
    >
      <div className='photo-wrapper p-2'>
        <img className='w-32 h-32  mx-auto' src={image} alt={name} />
      </div>
      <div className='text-center'>
        <h3 className={`text-xl ${styles.pokemonName}`}>{capitalizedName}</h3>
      </div>
      <div className='flex  justify-items-stretch p-4'>
        <div className='flex flex-col flex-grow'>
          <h4 className='mb-2 font-bold'>Moves:</h4>
          {moves.map((move) => (
            <span key={move}>{move}</span>
          ))}
        </div>
        <div className='flex flex-col flex-grow'>
          <h4 className='mb-2 font-bold'>Stats:</h4>
          <div className='flex justify-between'>
            <span>Attack: </span>
            <span>{stats.attack}</span>
          </div>
          <div className='flex justify-between'>
            <span>Defense: </span>
            <span>{stats.defense}</span>
          </div>
          <div className='flex justify-between'>
            <span>Speed: </span>
            <span>{stats.speed}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
