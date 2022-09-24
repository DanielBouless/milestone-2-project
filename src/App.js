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
    const apiURL = `https://pokemon-milestone-be.herokuapp.com/pokemon`;

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

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                data={data}
                                apiURL={apiURL}
                                fetchData={fetchData}
                                setId={setId}
                                setData={setData}
                            />
                        }
                    />
                    <Route
                        path="/team_stats"
                        element={
                            <TeamStats
                                data={data}
                                apiUrl={apiURL}
                                setData={setData}
                            />
                        }
                    />
                    <Route path="/add_team" element={<AddTeam />} />
                    <Route
                        path="/storage"
                        element={
                            <Storage
                                data={data}
                                apiURL={apiURL}
                                setData={setData}
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
