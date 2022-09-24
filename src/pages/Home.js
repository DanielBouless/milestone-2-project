import Container from "react-bootstrap/Container";
import Navigation from "../components/Navigation";
import TeamCard from "../components/TeamCard";
import WildPokemonCard from "../components/WildPokemonCard";
import Stack from "react-bootstrap/Stack";


function Home(props) {
    return (
        <div>
            <Container>
                <Stack gap={3}>
                    <Navigation />
                    <WildPokemonCard
                        data={props.data}
                        apiURL={props.apiURl}
                        setId={props.setId}
                        setData={props.setData}
                        fetchData={props.fetchData}
                    />
                    <TeamCard setData={props.setData} data={props.data} />
                </Stack>
            </Container>
        </div>
    );
}
export default Home;
