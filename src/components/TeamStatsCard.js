import Card from "react-bootstrap/Card";
import RemoveFromTeamBtn from "./RemoveFromTeamBtn";
import { useEffect, useState } from "react";

import Stack from "react-bootstrap/Stack";
import CardGroup from "react-bootstrap/CardGroup";

function TeamStatsCard(props) {
  const [pokeData, setPokeData] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        await props.getAllOnTeam().then((res) => setPokeData(res));
      } catch (error) {
        console.log(error);
      }
    };
    fetchPokemon();
  }, []);

  console.log(pokeData);

  const renderPokemon = pokeData.map((pokemon, i) => {
    return (
      <Card className="text-center mx-auto" key={pokemon._id} data={pokemon}>
        <Card.Title>{pokemon.name}</Card.Title>
        <Card.Img
          variant="top"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          alt="Team Img"
        />
        <RemoveFromTeamBtn
          handleRemoveFromTeam={props.handleRemoveFromTeam}
          // data={props.data}
          id={pokemon._id}
          name={pokemon.name}
        />
      </Card>
    );
  });
  return (
    <div>
      <CardGroup>
        <Card
          className="text-center mx-auto"
          style={{ width: "auto" }}
          border="primary"
        >
          <Stack gap={2}>
            <Card.Body>
              <Stack direction="horizontal" gap={3}>
                <Card border="light">
                  <Card.Title>Youngster Joey</Card.Title>
                  <Card.Img
                    variant="top"
                    src="https://pbs.twimg.com/profile_images/1278636039/HGSS_Youngster_400x400.png"
                    alt="youngster Joey"
                    style={{ width: "10rem" }}
                  />
                </Card>
                {renderPokemon}
              </Stack>
            </Card.Body>
          </Stack>
        </Card>
      </CardGroup>
    </div>
  );
}

export default TeamStatsCard;
