
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Stack from 'react-bootstrap/Stack'


//requires passing TeamCard array of pokemon
//map the array and return a card with a picture of each pokemon

function TeamCard() {
  
  return (
    <CardGroup>
      <Card className='text-center mx-auto' style={{ width: 'auto' }}>
        <Stack gap={2}>
          <Card.Body>
            <Stack direction='horizontal' gap={3}>
              <Card className='text-center mx-auto'>
                <Card.Img variant="top" src="Team pic" alt='Team Img'/>
              </Card>
              <Card className='text-center mx-auto'>
                <Card.Img variant="top" src="Team pic" alt='Team Img'/>
              </Card>
              <Card className='text-center mx-auto'>
                <Card.Img variant="top" src="Team pic" alt='Team Img'/>
              </Card>
              <Card className='text-center mx-auto'>
                <Card.Img variant="top" src="Team pic" alt='Team Img'/>
              </Card>
              <Card className='text-center mx-auto'>
                <Card.Img variant="top" src="Team pic" alt='Team Img'/>
              </Card>
              <Card className='text-center mx-auto'>
                <Card.Img variant="top" src="Team pic" alt='Team Img'/>
              </Card>
            </Stack>
          </Card.Body>
          <Card.Body>
            <Card.Img variant="top" src="https://pbs.twimg.com/profile_images/1278636039/HGSS_Youngster_400x400.png" alt='youngster Joey' style={{ width: '3.5rem'}}/>
            <Card.Title>Youngster Joey</Card.Title>
            <Card.Text>Squad</Card.Text>
          </Card.Body>
        </Stack>

      </Card>
    </CardGroup>
    
  );
}

export default TeamCard;


<Card className='text-center mx-auto' style={{ width: 'auto' }}>
        <Stack gap={2}>
          <Card.Body>
            <Stack direction='horizontal' gap={3}>
              <Card.Img variant="top" src="Team pic" alt='Team Img'/>
              <Card.Img variant="top" src="Team pic" alt='Team Img'/>
              <Card.Img variant="top" src="Team pic" alt='Team Img'/>
              <Card.Img variant="top" src="Team pic" alt='Team Img'/>
              <Card.Img variant="top" src="Team pic" alt='Team Img'/>
              <Card.Img variant="top" src="Team pic" alt='Team Img'/>
            </Stack>
          </Card.Body>
          <Card.Body>
            <Card.Img variant="top" src="https://pbs.twimg.com/profile_images/1278636039/HGSS_Youngster_400x400.png" alt='youngster Joey' style={{ width: '3.5rem'}}/>
            <Card.Title>Youngster Joey</Card.Title>
            <Card.Text>Squad</Card.Text>
          </Card.Body>
        </Stack>

      </Card>