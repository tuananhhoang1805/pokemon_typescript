export interface PokemonDetails {
  id: number;
  name: string;
  height: number;
  weight: number;
  types?: {
    slot?: number;
    type: {
      name: string;
      url?: string;
    }
  };
  abilities?: string[];
  sprites: {
    front_default: string;
  };
}
