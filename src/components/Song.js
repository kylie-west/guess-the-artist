import React, { useRef, useState } from "react";
import styled from "styled-components";
import Card from "./Card";

const Song = ({ url }) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const audioRef = useRef();

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
		<Card width="150px" height="150px">
			<audio src={url} playing={isPlaying} ref={audioRef} />
			<PlayButton onClick={handleClick}>
				{isPlaying ? (
					<Icon className="fa-solid fa-pause"></Icon>
				) : (
					<Icon className="fa-solid fa-play"></Icon>
				)}
			</PlayButton>
		</Card>
	);
};

export default Song;

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
