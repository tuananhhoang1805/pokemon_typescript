import React from "react";

interface Props {
  id: number;
  name: string;
  image: string;
}
const PokemonDetail: React.FC<Props> = (props) => {
  const { id, name, image } = props;
  return <div>{name}</div>;
};

export default PokemonDetail;
