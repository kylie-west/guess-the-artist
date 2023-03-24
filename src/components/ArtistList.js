import Artist from "./Artist";
import React from "react";

const ArtistList = ({
	artists,
	selectedArtist,
	setSelectedArtist,
	correctArtist,
	gameState
}) => {
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
					isCorrectAnswer={
						gameState === "CORRECT_ANSWER" && artist === selectedArtist
					}
					isIncorrectAnswer={
						gameState === "INCORRECT_ANSWER" && artist === selectedArtist
					}
					isRevealedAnswer={
						gameState === "REVEALED_ANSWER" && artist === correctArtist
					}
					gameState={gameState}
				/>
			))}
		</>
	);
};

export default ArtistList;
