/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
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
  const [selected, setSelected] = useState(false);

  const closeDetail = () => {
    console.log("je");
    
    setViewDetails({
      id: 10,
      isOpen: false,
    });
  };
  useEffect(() => {
    setSelected(id === viewDetails.id);
  }, [viewDetails]);
  return (
    <div className="pokemon-card">
      {selected ? (
        <div className="pokemon-list-detailed">
          <div>
            <p className="detail-close" onClick={closeDetail}>
              X
            </p>
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
                    <div
                      style={{ fontSize: "9px", textTransform: "capitalize" }}
                    >
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
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              textTransform: "capitalize",
            }}
          >
            Abilities :{" "}
            {abilities?.map((ab) => {
              return (
                <span style={{ fontWeight: "bold" }}>{ab.ability.name}</span>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="pokemon-card-container">
          <div style={{ padding: "10px" }}>
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
                    <div
                      style={{ fontSize: "9px", textTransform: "capitalize" }}
                    >
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
        </div>
      )}
    </div>
  );
};

export default PokemonDetail;
