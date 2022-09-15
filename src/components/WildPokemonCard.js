import FleeButton from './FleeButton'
import CatchButton from './CatchButton'
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Stack from 'react-bootstrap/Stack'

function WildPokemonCard() {
  return (
    <Card className='text-center mx-auto' style={{ width: '30rem'}}>
      <Card.Img variant="top" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png" alt='Wild Poke Img'/>
      <Card.Body>
        <Card.Title>Wild Pokemon Name</Card.Title>

        <ButtonGroup>
            <Stack gap={3} direction='horizontal'>
                <FleeButton/>
            <CatchButton/>
            </Stack>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
}

export default WildPokemonCard;