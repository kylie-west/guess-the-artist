import React, { useState } from "react";
import { Route } from "react-router-dom";

import Home from "./Home";

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

	return (
		<div>
			<Route exact path="/" component={Home} />
		</div>
	);
};

export default App;
