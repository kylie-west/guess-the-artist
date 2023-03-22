import Artist from "./Artist";
import React from "react";

const ArtistList = ({ artists }) => {
	return (
		<>
			{artists.map((artist, index) => (
				<Artist artistName={artist.name} url={artist.image} key={index} />
			))}
		</>
	);
};

export default ArtistList;
