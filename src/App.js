//import TeamStats from "./components/TeamStats";

import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TeamStatsCard from "./components/TeamStatsCard";
import AddTeam from "./pages/AddTeam";
import Home from "./pages/Home";
import TeamStats from "./pages/TeamStats";
import Storage from "./pages/Storage";

function App() {
  const [data, setData] = useState({});
  const [id, setId] = useState(Math.floor(Math.random() * 150));
  const [caught, setCaught] = useState();

  //const apiURL = `http://localhost:5050/pokemon`;
  const apiURL = process.env.REACT_APP_API_URL;

  //const endpoint = 'ditto'

  useEffect(() => {
    fetchData(apiURL);
  }, []);

  async function fetchData(url) {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }); // link to backend localhost:5050 yuh
      //    .../team   .../storedpokemon
      const data = await response.json();
      setData(data);
    } catch (err) {
      console.error(err);
    }
  }

  function handleFetchData() {
    fetchData(apiURL);
  }

  async function handleCatch() {
    try {
      const response = await fetch(apiURL + "/storedPokemon", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }).then(handleFetchData());
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getAllPokemon() {
    try {
      const response = await fetch(apiURL + "/myPokemon", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      setData(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function getAllOnTeam() {
    try {
      const response = await fetch(apiURL + "/myTeam", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      setData(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function handleReleasePokemon(id) {
    try {
      const response = await fetch(apiURL + "/storedPokemon/" + id, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleAddToTeam(id) {
    try {
      const response = await fetch(apiURL + "/storedPokemon/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.data),
      });
      const data = await response.json();
      setData(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function handleRemoveFromTeam(id) {
    try {
      const response = await fetch(apiURL + "/storedPokemon/offTeam/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        //body: JSON.stringify(this.data),
      });
      const data = await response.json();
      setData(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                data={data}
                handleFetchData={handleFetchData}
                setId={setId}
                handleCatch={handleCatch}
                getAllOnTeam={getAllOnTeam}
              />
            }
          />
          <Route
            path="/team_stats"
            element={
              <TeamStats
                data={data}
                getAllOnTeam={getAllOnTeam}
                handleRemoveFromTeam={handleRemoveFromTeam}
              />
            }
          />
          <Route path="/add_team" element={<AddTeam />} />
          <Route
            path="/storage"
            element={
              <Storage
                data={data}
                getAllPokemon={getAllPokemon}
                handleReleasePokemon={handleReleasePokemon}
                handleAddToTeam={handleAddToTeam}
              />
            }
          />
        </Routes>
      </BrowserRouter>

      {/* <TeamCard/> */}
    </div>
  );
}

export default App;
