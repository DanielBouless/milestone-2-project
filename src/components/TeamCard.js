import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Stack from "react-bootstrap/Stack";
import { useState, useEffect } from "react";

//requires passing TeamCard array of pokemon
//map the array and return a card with a picture of each pokemon

function TeamCard(props) {
  const [pokeData, setPokeData] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        await props
          .getAllOnTeam()
          .then((res) => {
            return res;
          })
          .then((res) => setPokeData(res));
      } catch (error) {
        console.log(error);
      }
    };
    fetchPokemon();
  }, []);

  console.log(pokeData);

  const renderPokemon = pokeData.map((pokemon, i) => {
    return (
      <Card className="text-center mx-auto" key={i} data={pokemon}>
        <Card.Img
          variant="top"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeData[i].id}.png`}
          alt="Team Img"
        />
      </Card>
    );
  });

  return (
    <CardGroup>
      <Card
        className="text-center mx-auto"
        style={{ width: "auto" }}
        border="primary"
      >
        <Stack gap={2}>
          <Card.Body>
            <Stack direction="horizontal" gap={3}>
              {renderPokemon}
            </Stack>
          </Card.Body>
          <Card.Body>
            <Card.Img
              variant="top"
              src="https://pbs.twimg.com/profile_images/1278636039/HGSS_Youngster_400x400.png"
              alt="youngster Joey"
              style={{ width: "3.5rem" }}
            />
            <Card.Title>Youngster Joey</Card.Title>
            <Card.Text>Squad</Card.Text>
          </Card.Body>
        </Stack>
      </Card>
    </CardGroup>
  );
}

export default TeamCard;
