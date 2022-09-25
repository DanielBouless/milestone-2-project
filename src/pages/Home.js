import Container from "react-bootstrap/Container";
import Navigation from "../components/Navigation";
import TeamCard from "../components/TeamCard";
import WildPokemonCard from "../components/WildPokemonCard";
import Stack from "react-bootstrap/Stack";


function Home(props) {
<<<<<<< HEAD
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
=======
  return (
    <div>
      <Container>
        <Stack gap={3}>
          <Navigation />
          <WildPokemonCard
            data={props.data}
            handleFetchData={props.handleFetchData}
            setId={props.setId}
            handleCatch={props.handleCatch}
          />
          <TeamCard data={props.data} getAllOnTeam={props.getAllOnTeam} />
        </Stack>
      </Container>
    </div>
  );
>>>>>>> parent of f4ecc7e (ready for merge, all prop-drilling fixed)
}
export default Home;
