import React from "react";

interface Props {
  id: number;
  name: string;
  image: string;
  height: number;
  weight: number;
  types: string[];
}
const PokemonDetail: React.FC<Props> = (props) => {
  const { id, name, image } = props;
  return (
    <div className="pokemon-card">
      <div className="pokemon-card-container">
        <div>
          <div
            style={{
              textAlign: "center",
              fontSize: "15px",
              textTransform: "capitalize",
            }}
          >
            {name}
          </div>
          <div>
            <span></span>
          </div>
        </div>

        <div>
          <img src={image} width={100} height={100} alt={name} />
        </div>
        <div>
          <span>Height : </span>
          <span>Weight : </span>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
