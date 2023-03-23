import React from "react";
import Song from "./Song";

const SongList = ({ songs }) => {
	return (
		<>
			{songs.map((song, index) =>
				song.preview_url ? <Song url={song.preview_url} key={index} /> : null
			)}
		</>
	);
};

export default SongList;
