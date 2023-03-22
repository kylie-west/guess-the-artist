import React from "react";
import Song from "./Song";

const SongList = ({ songs }) => {
	return (
		<>
			{songs.map((song, index) => (
				<Song url={song.preview_url} key={index} />
			))}
		</>
	);
};

export default SongList;
