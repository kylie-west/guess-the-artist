import React, { useRef, useState } from "react";
import styled from "styled-components";

import Card from "./Card";

const Artist = ({ url, artistName, onClick, selected }) => {
	return (
		<StyledCard width="250" height="290" onClick={onClick} selected={selected}>
			<img src={url || ""} alt="new" width="250" height="248" />

			{artistName}
		</StyledCard>
	);
};
export default Artist;

const StyledCard = styled(Card)`
	border: ${({ selected }) => (selected ? "2px solid gray" : "1px solid gray")};
	cursor: pointer;
`;
