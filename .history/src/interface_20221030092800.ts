export interface PokemonDetails {
  id: number;
  name: string;
  height: number;
  weight: number;
  types?: string[];
  abilities?: string[];
  sprites: {
    front_default: string;
  };
}
