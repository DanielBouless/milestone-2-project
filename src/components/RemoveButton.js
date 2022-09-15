import Button from 'react-bootstrap/Button';

function RemoveButton() {
  return (
    <>
      <div style= {{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Button variant="danger" size="lg">Remove</Button>{' '}
      </div>
    </>
  );
}

export default RemoveButton;