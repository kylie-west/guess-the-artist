import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SongList from "./SongList";
import Lives from "./Lives";
import GameOver from "./GameOver";
import ArtistList from "./ArtistList";
import {
	getArtists,
	getSongs,
	getRandom,
	getMultipleRandom
} from "../utils/getData";

const Game = ({ token, config }) => {
	// Game state constants
	const DEFAULT = "DEFAULT";
	const CORRECT = "CORRECT_ANSWER";
	const INCORRECT = "INCORRECT_ANSWER";
	const REVEALED = "REVEALED_ANSWER";
	const GAME_OVER = "GAME_OVER";

	// State
	const [artists, setArtists] = useState([]);
	const [currentArtists, setCurrentArtists] = useState([]);
	const [correctArtist, setCorrectArtist] = useState(null);
	const [songs, setSongs] = useState([]);
	const [score, setScore] = useState(0);
	const [lives, setLives] = useState(3);
	const [selectedArtist, setSelectedArtist] = useState(null);
	const [artistHistory, setArtistHistory] = useState([]);
	const [gameState, setGameState] = useState(DEFAULT);

	// Prop destructuring
	const { selectedGenre, numSongs, numArtists } = config;

	// Gets and sets data on component render
	useEffect(() => {
		setUpData();
	}, []);

	const setUpData = async () => {
		if (correctArtist) {
			setArtistHistory([...artistHistory, correctArtist]);
		}

		// If artists have already been fetched for this session, don't re-fetch
		let artistsArray;
		if (!artists.length) {
			artistsArray = await getArtists(token, selectedGenre, numArtists);
			setArtists(artistsArray);
		} else {
			artistsArray = artists;
		}

		// Set current displayed artists
		const randomArtists = getMultipleRandom(artistsArray, numArtists);
		setCurrentArtists(randomArtists);

		// From that random list, choose and set the "correct" artist for this round
		let randomArtist = getRandom(randomArtists);
		setCorrectArtist(randomArtist);

		// Fetch a selection of songs belonging to the correct artist
		const songs = await getSongs(token, randomArtist, selectedGenre, numSongs);
		setSongs(songs);
	};

	const handleClick = e => {
		if (!selectedArtist) {
			return;
		}

		if (lives < 1) {
			setGameState(GAME_OVER);
			return;
		}

		switch (gameState) {
			case DEFAULT:
				if (selectedArtist === correctArtist) {
					setGameState(CORRECT);
					setScore(score + 1);
					break;
				} else {
					setGameState(INCORRECT);
					break;
				}
			case CORRECT:
				setGameState(DEFAULT);
				setUpData();
				setSelectedArtist(null);
				break;
			case INCORRECT:
				setLives(lives - 1);
				setGameState(REVEALED);
				break;
			case REVEALED:
				setGameState(DEFAULT);
				setUpData();
				setSelectedArtist(null);
				break;
		}
	};

	if (gameState == GAME_OVER) {
		return <GameOver score={score} setGameState={setGameState} />;
	} else {
		return (
			<Wrapper>
				<TopBar>
					<Stats>
						<LivesContainer>
							Lives: <Lives lives={lives} />
						</LivesContainer>
						<div>Score: {score}</div>
					</Stats>
					<a>Start over</a>
				</TopBar>
				<Songs>
					<SongList songs={songs} />
				</Songs>
				<Artists>
					<ArtistList
						artists={currentArtists}
						setSelectedArtist={setSelectedArtist}
						selectedArtist={selectedArtist}></ArtistList>
				</Artists>
				<Button onClick={handleClick}>
					{gameState === INCORRECT
						? "Reveal Answer"
						: gameState === CORRECT || gameState === REVEALED
						? "Next"
						: "Choose"}
				</Button>
			</Wrapper>
		);
	}
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
	align-items: center;
	gap: 10px;
`;

const LivesContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
`;

const Songs = styled.div`
	display: flex;
	gap: 10px;
`;

const Artists = styled.div`
	display: flex;
	gap: 20px;
`;

const Button = styled.button`
	width: fit-content;
	padding: 10px;
	cursor: pointer;
`;
