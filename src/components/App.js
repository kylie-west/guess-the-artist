import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Game from "./Game";

import Home from "./Home";
import Landing from "./Landing";

const App = () => {
	const [token, setToken] = useState(null);
	const [genres, setGenres] = useState([]);
	const [authLoading, setAuthLoading] = useState(false);
	const [configLoading, setConfigLoading] = useState(false);
	const [config, setConfig] = useState({
		selectedGenre: null,
		numSongs: 1,
		numArtists: 2
	});

	// const loadGenres = async t => {
	//   setConfigLoading(true)
	//   const response = await fetchFromSpotify({
	//     token: t,
	//     endpoint: 'recommendations/available-genre-seeds'
	//   })
	//   console.log(response)
	//   setGenres(response.genres)
	//   setConfigLoading(false)
	// }

	// useEffect(() => {
	// 	setAuthLoading(true);

	// 	const storedTokenString = localStorage.getItem(TOKEN_KEY);
	// 	if (storedTokenString) {
	// 		const storedToken = JSON.parse(storedTokenString);
	// 		if (storedToken.expiration > Date.now()) {
	// 			console.log("Token found in localstorage");
	// 			setAuthLoading(false);
	// 			setToken(storedToken.value);
	// 			loadGenres(storedToken.value);
	// 			return;
	// 		}
	// 	}
	// 	console.log("Sending request to AWS endpoint");
	// 	request(AUTH_ENDPOINT).then(({ access_token, expires_in }) => {
	// 		const newToken = {
	// 			value: access_token,
	// 			expiration: Date.now() + (expires_in - 20) * 1000
	// 		};
	// 		localStorage.setItem(TOKEN_KEY, JSON.stringify(newToken));
	// 		setAuthLoading(false);
	// 		setToken(newToken.value);
	// 		loadGenres(newToken.value);
	// 	});
	// }, []);

	// if (authLoading || configLoading) {
	//   return <div>Loading...</div>
	// }

	return (
		<div>
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route path="/play">
					<Game token={token} genres={genres} />
				</Route>
			</Switch>
		</div>
	);
};

export default App;
