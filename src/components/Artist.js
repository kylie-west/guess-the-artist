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
			<Img src={url || ""} alt="new" width="250" height="248" />
			<Name>{artistName}</Name>
		</StyledCard>
	);
};
export default Artist;

const StyledCard = styled(Card)`
	cursor: pointer;
	transition: 100ms;

	&:hover {
		transform: translateY(-3px);
		box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
		background-color: rgba(0, 0, 0, 0.2);
	}

	&.correct {
		border: 2px solid green;
		&::before {
			content: "Correct!";
			display: block;
			position: absolute;
			transform: translateY(-165px);
			color: green;
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
		}
	}

	&.revealed {
		border: 2px solid black;
		transform: translateY(-5px);
		box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
		transition: 100ms;
	}
`;

const Name = styled.div`
	padding: 10px;
`;

const Img = styled.img`
	width: 250px;
	height: 250px;
	border-radius: 4px 4px 0 0;
`;
