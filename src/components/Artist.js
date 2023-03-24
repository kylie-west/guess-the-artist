import React, { useRef, useState } from "react";
import styled from "styled-components";

import Card from "./Card";

const Artist = ({ url, artistName, onClick, selected }) => {
	return (
		<StyledCard onClick={onClick} selected={selected}>
			<Img src={url || ""} alt="new" width="250" height="248" />
			<Name>{artistName}</Name>
		</StyledCard>
	);
};
export default Artist;

const StyledCard = styled(Card)`
	border: none;
	cursor: pointer;
	transition: 100ms;

	&:hover {
		transform: translateY(-3px);
		box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
		background-color: rgba(0, 0, 0, 0.2);
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
