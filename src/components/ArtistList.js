import Artist from "./Artist"
import React from "react";

const ArtistList = ({ artists }) => {
	return (
		<div>
			{artists.map((artist, index) => (
				<Artist  artistName = {artist.name} url={artist.image} key={index} />
			))}
		</div>
	);
};

export default ArtistList;
