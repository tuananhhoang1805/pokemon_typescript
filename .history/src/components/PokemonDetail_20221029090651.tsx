import React from "react";

interface Props {
  id: number;
  name: string;
  image: string;
}
const PokemonDetail: React.FC<Props> = (props) => {
  return <div>PokemonDetail</div>;
};

export default PokemonDetail;
