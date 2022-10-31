import React from "react";
import { Details } from "../App";

interface Props {
  id: number;
  name: string;
  image: string;
  height: number;
  weight: number;
  types?:
    | {
        type: {
          name: string;
          url: string;
        };
      }[]
    | undefined
    | null;
  abilities?:
    | {
        ability: {
          name: string;
          url: string;
        };
      }[]
    | undefined;
  viewDetails: Details;
  setViewDetails: React.Dispatch<React.SetStateAction<Details>>;
}
const PokemonDetail: React.FC<Props> = (props) => {
  const {
    id,
    name,
    image,
    height,
    weight,
    types,
    abilities,
    viewDetails,
    setViewDetails,
  } = props;

  // console.log(types);

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
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                columnGap: "4px",
              }}
            >
              {types?.map((types) => {
                const { type } = types;
                return (
                  <div style={{ fontSize: "9px", textTransform: "capitalize" }}>
                    <p> {type.name}</p>
                  </div>
                );
              })}
            </span>
          </div>
        </div>

        <div className="pokemon-image">
          <img src={image} width={100} height={100} alt={name} />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            fontSize: "12px",
          }}
        >
          <span>Height : {height}</span>
          <span>Weight : {weight}</span>
        </div>

        <div
          style={{
            fontSize: "12px",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Abilities :{" "}
          {abilities?.map((ab) => {
            return <span>{ab.ability.name}</span>;
          })}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
