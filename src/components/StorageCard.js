import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack'


//requires passing TeamCard array of pokemon
//map the array and return a card with a picture of each pokemon

function StorageCard() {
  
  return (
    <Card className='text-center mx-auto' style={{ width: 'auto' }}>
      <Stack gap={2}>
        <Card.Body>
          <Stack direction='horizontal' gap={3}>
            <Card.Img variant="top" src="Pokemon img" alt='Pokemon img'/>
            <Card.Img variant="top" src="Pokemon img" alt='Pokemon img'/>
            <Card.Img variant="top" src="Pokemon img" alt='Pokemon img'/>
            <Card.Img variant="top" src="Pokemon img" alt='Pokemon img'/>
            <Card.Img variant="top" src="Pokemon img" alt='Pokemon img'/>
            <Card.Img variant="top" src="Pokemon img" alt='Pokemon img'/>
          </Stack>
        </Card.Body>
      </Stack>

    </Card>
  );
}

export default StorageCard;