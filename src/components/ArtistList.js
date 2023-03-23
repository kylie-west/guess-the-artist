import Artist from "./Artist";
import React from "react";

const ArtistList = ({ artists, selectedArtist, setSelectedArtist }) => {
	return (
		<>
			{artists.map((artist, index) => (
				<Artist
					onClick={() => {
						setSelectedArtist(artist);
					}}
					artistName={artist.name}
					url={artist.image}
					key={index}
					selected={artist === selectedArtist}
				/>
			))}
		</>
	);
};

export default ArtistList;
