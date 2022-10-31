import React from "react";

interface Props {
  id: number;
  name: string;
  image: string;
}
const PokemonDetail: React.FC<Props> = (props) => {
  const { id, name, image } = props;
  return (
    <div className="pokemon-card">
      <div className="pokemon-card-container">
        <div style={{ textAlign: "center", fontSize: "15px"}}>{name}</div>
        <div>
          <img src={image} width={100} height={60} alt={name} />
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
