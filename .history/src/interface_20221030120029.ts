export interface PokemonDetails {
  id: number;
  name: string;
  height: number;
  weight: number;
  // types?: {
  //   slot?: number;
  //   type: {
  //     name: string;
  //     url?: string;
  //   }
  // };
  types?:
    | {
        type: {
          name: string;
          url: string;
        };
      }[]
    | undefined
    | null;
  sprites: {
    front_default: string;
  };
}

export interface PokemonAbilities extends PokemonDetails {
  abilities?: {
    name: string;
    ability: string;
  }[];
}
