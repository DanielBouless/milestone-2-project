import Button from "react-bootstrap/Button";

function CatchButton(props) {
    const apiURL = "https://pokemon-milestone-be.herokuapp.com/pokemon";
    async function handleCatch() {
        try {
            const response = await fetch(apiURL + "/storedPokemon", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            }).then((res) => {
                props.handleFetchData();
                const data = res.json();
                console.log(data);
                props.setData(data);
            });
        } catch (error) {
            console.log(error);
        }
    }
    function handleClick() {
        handleCatch();
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
