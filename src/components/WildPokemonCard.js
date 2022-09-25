import FleeButton from "./FleeButton";
import CatchButton from "./CatchButton";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Stack from "react-bootstrap/Stack";


function WildPokemonCard(props) {

  return (
    <Card
      className="text-center mx-auto"
      border="primary"
      style={{ width: "30rem" }}
    >
      <Card.Img
        variant="top"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.data.id}.png`}
        alt="Wild Poke Img"
        style={{ width: "30rem" }}
      />
      <Card.Title>{props.data.name}</Card.Title>
      <Card.Body>
        <ButtonGroup>
          <Stack gap={3} direction="horizontal">
            <FleeButton
              setId={props.setId}
              handleFetchData={props.handleFetchData}
            />
            <CatchButton handleCatch={props.handleCatch} setId={props.setId} />
          </Stack>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );

}

export default WildPokemonCard;
