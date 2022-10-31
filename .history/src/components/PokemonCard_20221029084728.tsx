import React from "react";
import { PokemonDetails } from "../interface";

interface Props {
  pokemon: PokemonDetails;
}
const PokemonCard: React.FC<Props> = (props) => {
  return <div>PokemonCard</div>;
};

export default PokemonCard;
