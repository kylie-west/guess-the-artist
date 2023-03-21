import React from "react";
import Heart from "./Heart";

const Lives = ({ lives }) => {
	const livesArray = [1, 2, 3];
	const WHITE = "#ffffff";
	const RED = "#e23c3c";

	const getFill = id => (id > lives ? WHITE : RED);

	return (
		<div>
			{livesArray.map(life => (
				<Heart key={life} fill={getFill(life)} />
			))}
		</div>
	);
};

export default Lives;
