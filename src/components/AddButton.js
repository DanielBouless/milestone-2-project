import Button from "react-bootstrap/Button";

function AddButton(props) {
  const handleSubmit = () => {
    handleClick();
    window.alert(`${props.data.name} was added to your team!`);
  };
  const handleClick = () => {
    props.handleAddToTeam(props.data._id);
    console.log(props.data);
  };
  return (
    <>
      <Button onClick={handleSubmit} variant="success" size="lg">
        Add to Team
      </Button>
    </>
  );
}

export default AddButton;
