import React, { useEffect, useState } from "react";
import Song from "./Song";

const SongList = ({ songs, currentArtists }) => {
	const [currentPlayer, setCurrentPlayer] = useState(null);

	// If a player is currently playing, pause it and set clicked player as currentPlayer
	const handlePlay = player => {
		if (currentPlayer && currentPlayer !== player) {
			currentPlayer.pause();
		}
		setCurrentPlayer(player);
	};

	useEffect(() => {
		setCurrentPlayer(null);
	}, [songs, currentArtists]);

	return (
		<>
			{songs.map((song, index) =>
				song.preview_url ? (
					<Song
						key={index}
						url={song.preview_url}
						handlePlay={handlePlay}
						currentPlayer={currentPlayer}
					/>
				) : null
			)}
		</>
	);
};

export default SongList;
