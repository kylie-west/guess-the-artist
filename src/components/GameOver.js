import { Route, Redirect, Link, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";

export const GameOver = props => {
	return (
		<Wrapper>
			<Header>Game Over :(</Header>
			<Card width="250px" height="250px" gap="15px">
				<ScoreLabel>Final score:</ScoreLabel>
				<Score>{props.score}</Score>
				<StyledLink to=""> Play Again </StyledLink>
			</Card>
		</Wrapper>
	);
};
export default GameOver;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 50px;
`;

const Header = styled.h1`
	font-size: 5rem;
	margin-top: 50px;
`;
const ScoreLabel = styled.div`
	font-size: 2.4rem;
`;

const Score = styled.div`
	text-align: center;
	font-size: 4rem;
	font-weight: 600;
`;

const StyledLink = styled(Link)`
	display: block;
	padding: 10px 20px;
	text-decoration: none;
	color: white;
	background-color: #735fbf;
	border-radius: 4px;
	transition: 100ms;

	&:hover {
		background-color: #584a8c;
	}
`;
