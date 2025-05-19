import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { getAccessToken } from "../utils/auth";
import Game from "./Game";
import GameOver from "./GameOver";
import Landing from "./Landing";

const App = () => {
  const [authLoading, setAuthLoading] = useState(true);
  const [config, setConfig] = useState({
    selectedGenre: "electronic",
    numSongs: 1,
    numArtists: 2,
  });
  const [token, setToken] = useState(null);

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

  if (authLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Landing config={config} setConfig={setConfig} />
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
