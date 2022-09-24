import Button from "react-bootstrap/Button";

function AddButton(props) {
    async function handleAddToTeam(id) {
        try {
            const response = await fetch(
                props.apiURL + "/storedPokemon/" + id,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(this.data),
                }
            );
            const data = await response.json();
            props.setData(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    }
    const handleSubmit = () => {
        handleClick();
        window.alert(`${props.data.name} was added to your team!`);
    };
    const handleClick = () => {
        handleAddToTeam(props.data._id);
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
