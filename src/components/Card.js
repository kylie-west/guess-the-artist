import styled from "styled-components";

const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: ${({ width }) => width || "auto"};
	height: ${({ height }) => height || "auto"};
	margin: ${({ margin }) => margin || "0px"};
	padding: ${({ padding }) => padding || "0px"};
	background: ${({ bg }) => bg || "rgba(0, 0, 0, 0.1)"};
	background-color: ${({ selected }) => selected && "rgba(0, 0, 0, 0.2)"};
	border-radius: 4px;
	cursor: pointer;
	transition: 100ms;

	&:hover {
		background-color: rgba(0, 0, 0, 0.2);
	}
`;

export default Card;
