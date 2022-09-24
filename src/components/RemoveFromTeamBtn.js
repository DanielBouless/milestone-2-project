import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function RemoveFromTeamBtn(props) {
    const navigate = useNavigate();
    async function handleRemoveFromTeam(id) {
        try {
            const response = await fetch(
                props.apiURL + "/storedPokemon/offTeam/" + id,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    //body: JSON.stringify(this.data),
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
        window.alert(`${props.name} was removed from your team D:`);
        navigate("/team_stats");
    };
    const handleClick = () => {
        const id = props.id;
        handleRemoveFromTeam(id).then(() => {
            handleSubmit();
        });
    };
    return (
        <>
            <Button onClick={handleClick} variant="danger" size="lg">
                Remove from Team
            </Button>
        </>
    );
}

export default RemoveFromTeamBtn;
