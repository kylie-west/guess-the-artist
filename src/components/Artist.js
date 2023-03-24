import React from "react";
import styled from "styled-components";

import Card from "./Card";

const Artist = ({
	url,
	artistName,
	onClick,
	selected,
	isCorrectAnswer,
	isIncorrectAnswer,
	isRevealedAnswer
}) => {
	return (
		<StyledCard
			bg="rgba(88, 74, 140, 0.1)"
			onClick={onClick}
			selected={selected}
			className={`${
				isCorrectAnswer
					? "correct"
					: isIncorrectAnswer
					? "incorrect"
					: isRevealedAnswer
					? "revealed"
					: ""
			}`}>
			<img src={url || ""} alt="new" width="250" height="248" />
			<Name>{artistName}</Name>
		</StyledCard>
	);
};
export default Artist;

const StyledCard = styled(Card)`
	cursor: pointer;
	transition: 100ms;

	img {
		width: 250px;
		height: 250px;
		border-radius: 4px 4px 0 0;
	}

	&:hover {
		transform: translateY(-3px);
		box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
		background-color: rgba(88, 74, 140, 0.2);
	}

	&.correct {
		border: 2px solid green;
		&::before {
			content: "Correct!";
			display: block;
			position: absolute;
			transform: translateY(-165px);
			color: green;
			@media (max-width: 700px) {
				transform: translateY(-110px);
			}
		}
	}

	&.incorrect {
		border: 2px solid #f24640;
		&::before {
			content: "Incorrect :(";
			display: block;
			position: absolute;
			transform: translateY(-165px);
			color: #f24640;
			@media (max-width: 700px) {
				transform: translateY(-110px);
			}
		}
	}

	&.revealed {
		border: 2px solid black;
		transform: translateY(-5px);
		box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
		transition: 100ms;
	}

	@media (max-width: 700px) {
		max-width: 155px;
		img {
			width: 150px;
			height: 150px;
		}
	}
`;

const Name = styled.div`
	width: 250px;
	padding: 10px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	text-align: center;

	@media (max-width: 700px) {
		width: 150px;
		padding: 5px;
	}
`;

const Img = styled.img`
	width: 250px;
	height: 250px;
	border-radius: 4px 4px 0 0;
`;
