import { useParams } from "react-router";
import { useCharacter } from "../hooks/useCharacter";
import "./EachCharacter.css";

export const EachCharacter = () => {
  const { id } = useParams();
  const { error, loading, data } = useCharacter(id);
  console.log({ error, loading, data });

  if (error) return <div>Cannot find the data...</div>;

  if (loading) return <div>Loading your data...</div>;

  return (
    <div className="EachCharacter">
      <img src={data.character.image} width={500} height={500} />
      <div className="EachCharacter-content">
        <h1>{data.character.name}</h1>
        <p1>{data.character.gender}</p1>
        <div className="EachCharacter-episode">
          {data.character.episode.map((episode) => {
            return (
              <div>
                {episode.name} - <b>{episode.episode}</b>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
