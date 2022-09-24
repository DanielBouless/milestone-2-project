import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function ReleaseButton(props) {
    async function handleReleasePokemon(id) {
        try {
            const response = await fetch(
                props.apiURL + "/storedPokemon/" + id,
                {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                }
            );
        } catch (error) {
            console.log(error);
        }
    }
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/storage");
    };

    const handleClick = () => {
        const id = props.data._id;
        handleReleasePokemon(id).then(() => {
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
