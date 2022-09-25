import Button from "react-bootstrap/Button";

function CatchButton(props) {
  function handleClick() {
    props.handleCatch(props.data);
    let randId = Math.floor(Math.random() * 150);
    props.setId(randId);
  }

  return (
    <>
      <Button onClick={handleClick} variant="success" size="lg">
        PokeBall
      </Button>
    </>
  );
}

export default CatchButton;
