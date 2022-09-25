import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function ReleaseButton(props) {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/storage");
  };

  const handleClick = () => {
    const id = props.data._id;
    props.handleReleasePokemon(id).then(() => {
      handleSubmit();
      window.location.reload(false);
    });
  };

  return (
    <>
      <Button onClick={handleClick} variant="danger" size="lg">
        Release
      </Button>
    </>
  );
}

export default ReleaseButton;
