import CapturedCard from "../components/CapturedCard";
import Navigation from "../components/Navigation";
import { useState, useEffect } from "react";

function Storage(props) {
    const [pokeData, setPokeData] = useState([]);

    async function getAllPokemon() {
        try {
            const response = await fetch(props.apiURL + "/myPokemon", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            const data = await response.json();
            props.setData(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                await getAllPokemon()
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
                setData={props.setData}
                apiURL={props.apiURL}
                setId={props.setId}
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
