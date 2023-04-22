import React from "react";
import "./Characters.css";
import { useCharacters } from "../hooks/useCharacters";
import { Link } from "react-router-dom";

const Characters = () => {
  const { error, loading, data } = useCharacters();

  if (loading) return <div>Thank you for your patience...</div>;

  if (error) return <div>Something went wrong...</div>;

  return (
    <div className="Characters">
      {data.characters.results.map((character) => {
        return (
          <Link to={`/${character.id}`}>
            <img src={character.image} />
            <h2>{character.name}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default Characters;
