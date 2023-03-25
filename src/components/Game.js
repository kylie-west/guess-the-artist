import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
	const [loading, setLoading] = useState(false);

	// Prop destructuring
	const { selectedGenre, numSongs, numArtists } = config;

	// useEffect(() => {
	// 	setLoading(true);
	// 	setTimeout(() => {
	// 		setLoading(false);
	// 	}, 2000);
	// }, []);

	// Gets and sets data on component render
	useEffect(() => {
		setUpData(selectedGenre);
	}, []);

	const setUpData = async () => {
		if (correctArtist) {
			setArtistHistory([...artistHistory, correctArtist]);
		}

		// If artists have already been fetched for this session, don't re-fetch
		let artistsArray;
		if (!artists.length) {
			// setLoading(true);
			artistsArray = await getArtists(token, selectedGenre, numArtists);
			setArtists(artistsArray);
			// setLoading(false);
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
		// setLoading(true);
		const songs = await getSongs(token, randomArtist, selectedGenre, numSongs);
		setSongs(songs);
		// setLoading(false);
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
				<WhiteBox>
					<TopBar>
						<Stats>
							<LivesContainer>
								Lives: <Lives lives={lives} />
							</LivesContainer>
							<div>Score: {score}</div>
						</Stats>
						<StyledLink to="/">Start Over</StyledLink>
					</TopBar>

					<Header>Who is this?</Header>

					<Songs>
						<SongList songs={songs} currentArtists={currentArtists} />
					</Songs>
				</WhiteBox>

				<Artists>
					<ArtistList
						artists={currentArtists}
						setSelectedArtist={setSelectedArtist}
						selectedArtist={selectedArtist}
						correctArtist={correctArtist}
						gameState={gameState}></ArtistList>
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
	min-height: 100vh;
	background-color: #f8f8fa;
`;

const WhiteBox = styled.div`
	background: white;
	width: 100vw;
`;

const TopBar = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 5px 20px;

	@media (max-width: 700px) {
		box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
	}
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	font-weight: 600;
	color: inherit;

	&:hover {
		color: #f24640;
	}
`;

const Stats = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	font-weight: 600;
`;

const LivesContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
`;

const Header = styled.h1`
	text-align: center;
	font-size: 3rem;

	@media (max-width: 700px) {
		font-size: 2.4rem;
		padding: 15px 0;
	}
`;

const Songs = styled.div`
	display: flex;
	gap: 50px;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	padding: 50px 0;

	@media (max-width: 700px) {
		gap: 20px;
		padding: 0 0 30px 0;
	}
`;

const Artists = styled.div`
	display: flex;
	gap: 30px;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	margin-top: 100px;

	@media (max-width: 700px) {
		margin-top: 30px;
	}
`;

const Button = styled.button`
	min-width: 10rem;
	padding: 15px;
	margin: 50px auto;
	background: #735fbf;
	border: none;
	border-radius: 4px;
	color: white;
	font-size: 1.6rem;
	cursor: pointer;
	transition: 100ms;

	&:hover {
		background: #584a8c;
	}

	@media (max-width: 700px) {
		margin: 30px auto;
	}
`;

const Loader = styled.div`
	display: flex;
	padding: 10px;
`;
