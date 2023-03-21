import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SongList from "./SongList";
import fetchFromSpotify from "../services/api";

const Game = ({ token }) => {
	// Game state constants
	const DEFAULT = "DEFAULT";
	const CORRECT = "CORRECT_ANSWER";
	const INCORRECT = "INCORRECT_ANSWER";
	const REVEALED = "REVEALED_ANSWER";
	const GAME_OVER = "GAME_OVER";

	// State
	const [artists, setArtists] = useState([]);
	const [songs, setSongs] = useState([]);
	const [score, setScore] = useState(0);
	const [lives, setLives] = useState(3);
	const [selectedArtist, setSelectedArtist] = useState(null);
	const [gameState, setGameState] = useState(DEFAULT);

	const getArtists = async genre => {
		// Can't get random artists from API, but we can get song recommendations and pull artist IDs from there
		const recommendationData = await fetchFromSpotify({
			token,
			endpoint: "recommendations",
			params: { seed_genres: genre, min_popularity: 50, limit: 4 } // TODO: set limit to numArtists
		});
		const artistIds = recommendationData.tracks.map(
			track => track.artists[0].id
		);

		// Fetch data for each artist (since data from recommendations doesn't include artist images)
		const artistData = await fetchFromSpotify({
			token,
			endpoint: "artists",
			params: { ids: artistIds.join() }
		});

		// Create artist objects with data we need
		const result = artistData.artists.map(artist => ({
			id: artist.id,
			name: artist.name,
			image: artist.images[0].url
		}));

		console.log(result);

		setArtists(result);
		return result;
	};

	return (
		<Wrapper>
			<TopBar>
				<Stats>
					<div>Lives: {lives}</div>
					<div>Score: {score}</div>
				</Stats>
				<a>Start over</a>
			</TopBar>
			<Songs>
				<SongList songs={songs} />
			</Songs>
			<Artists>
				<div>[ArtistList]</div>
				<Button
					onClick={e => {
						e.preventDefault();
						getArtists("electronic");
					}}>
					Choose
				</Button>
			</Artists>
		</Wrapper>
	);
};

export default Game;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 50px;
`;

const TopBar = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

const Stats = styled.div`
	display: flex;
	gap: 10px;
`;

const Songs = styled.div``;

const Artists = styled.div``;

const Button = styled.button`
	width: fit-content;
`;
