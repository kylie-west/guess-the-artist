import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import fetchFromSpotify from "../services/api";
import { getAccessToken } from "../utils/auth";
import Game from "./Game";
import GameOver from "./GameOver";
import Landing from "./Landing";

const App = () => {
  const [authLoading, setAuthLoading] = useState(true);
  const [configLoading, setConfigLoading] = useState(false);
  const [config, setConfig] = useState({
    selectedGenre: "electronic",
    numSongs: 1,
    numArtists: 2,
  });
  const [token, setToken] = useState(null);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const data = window.localStorage.getItem("WHOSWHO_CONFIG_STATE");
    if (data !== null) setConfig(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("WHOSWHO_CONFIG_STATE", JSON.stringify(config));
    console.log("config", config);
  }, [config]);

  // If this is removed, things break
  const loadGenres = async (t) => {
    setConfigLoading(true);
    const response = await fetchFromSpotify({
      token: t,
      endpoint: "recommendations/available-genre-seeds",
    });
    console.log(response);
    setGenres(response.genres);
    setConfigLoading(false);
  };

  useEffect(() => {
    getAccessToken()
      .then((token) => {
        setToken(token);
        setAuthLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching token:", err);
        setAuthLoading(false);
      });
  }, []);

  if (authLoading || configLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Landing genres={genres} config={config} setConfig={setConfig} />
        </Route>
        <Route path="/play">
          <Game token={token} config={config} />
        </Route>
        <Route path="/gameover">
          <GameOver token={token} config={config} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
