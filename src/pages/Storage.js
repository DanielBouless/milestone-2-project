import CapturedCard from "../components/CapturedCard";
import Navigation from "../components/Navigation";
import { useState, useEffect } from "react";

function Storage(props) {
  const [pokeData, setPokeData] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        await props
          .getAllPokemon()
          .then((res) => {
            return res;
          })
          .then((res) => setPokeData(res));
      } catch (error) {
        console.log(error);
      }
    };
    fetchPokemon();
  }, []);

  const renderPokemon = pokeData.map((pokemon, i) => {
    return (
      <CapturedCard
        key={i}
        data={pokemon}
        handleReleasePokemon={props.handleReleasePokemon}
        setId={props.setId}
        handleAddToTeam={props.handleAddToTeam}
      />
    );
  });

  return (
    <div>
      <Navigation />
      {renderPokemon}
    </div>
  );
}

export default Storage;

/*
function PokeDex(props) {
    const allPokemon = props.getAllPokemon();
    console.log(allPokemon);
    const display = allPokemon.map(() => {
      return (
        <CapturedCard data={props.data} getAllPokemon={props.getAllPokemon} />
      );
    });
    console.log(props);
    return (
      <div>
        <Navigation />
        {display}
      </div>
    );
  }
  */
