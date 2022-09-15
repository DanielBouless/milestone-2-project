import Button from 'react-bootstrap/Button';


function ChangeColorButton() {
  const [toggle, setToggle] = React.useState(false);
  const toggleButton = () => setToggle(!toggle);

  return (
    <>
      <Button style={{backgroundColor: toggle ? 'white' : 'red'}} onClick={toggleButton} variant="dark" size="sm">Change Background Color</Button>{' '}
    </>
  );
}

export default ChangeColorButton;