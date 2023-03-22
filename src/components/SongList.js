import React from "react";
import Song from "./Song";

const SongList = ({ songs }) => {
	return (
		<div>
			{songs.map((song, index) => (
				<Song url={song.preview_url} key={index} />
			))}
		</div>
	);
};

export default SongList;
