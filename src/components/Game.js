import React, { useState } from "react";
import styled from "styled-components";

const Game = ({ token, genres }) => {
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
	const [gameState, setGameState] = DEFAULT;

	return (
		<Wrapper>
			<TopBar>
				<Stats>
					<div>Lives: {lives}</div>
					<div>Score: {score}</div>
				</Stats>
				<a>Start over</a>
			</TopBar>
			<Songs>[SongList]</Songs>
			<Artists>
				<div>[ArtistList]</div>
				<Button>Choose</Button>
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
