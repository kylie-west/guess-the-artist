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
	background: ${({ bg }) => bg || "white"};
	border: 1px solid gray;
	border-radius: 4px;
	${({ selected }) => selected && `
    background: silver;
  `}
`;

export default Card;
