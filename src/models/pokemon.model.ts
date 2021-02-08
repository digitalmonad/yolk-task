export type PokemonT = {
  name: string;
  moves: string[];
  image: string;
  stats: {
    speed: number;
    attack: number;
    defense: number;
  };
};
