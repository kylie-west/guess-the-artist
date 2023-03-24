import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Card from "./Card";

const Song = ({ url, handlePlay, currentPlayer }) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const audioRef = useRef();

	useEffect(() => {
		if (!currentPlayer) {
			audioRef.current.pause();
			setIsPlaying(false);
		}
	}, [currentPlayer]);

	const handleClick = e => {
		e.preventDefault();
		if (isPlaying) {
			audioRef.current.pause();
			setIsPlaying(false);
		} else {
			audioRef.current.play();
			setIsPlaying(true);
		}
	};

	return (
		<StyledCard
			width="150px"
			height="150px"
			bg="rgba(0, 0, 0, 0.1)"
			onClick={e => {
				handleClick(e);
				handlePlay(audioRef.current);
			}}>
			<audio
				src={url}
				playing={isPlaying.toString()}
				onPlaying={() => setIsPlaying(true)}
				onPause={() => setIsPlaying(false)}
				ref={audioRef}
			/>
			<PlayButton>
				{isPlaying ? (
					<Icon className="fa-solid fa-pause"></Icon>
				) : (
					<Icon className="fa-solid fa-play"></Icon>
				)}
			</PlayButton>
		</StyledCard>
	);
};

export default Song;

const StyledCard = styled(Card)`
	border: none;
	cursor: pointer;
	transition: 100ms;

	&:hover {
		background: rgba(0, 0, 0, 0.2);
	}
`;

const PlayButton = styled.button`
	padding: 0;
	margin: 0;
	border: none;
	outline: none;
	background: transparent;
	cursor: pointer;
`;

const Icon = styled.i`
	font-size: 30px;
`;
