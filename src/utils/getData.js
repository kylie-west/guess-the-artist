import fetchFromSpotify from "../services/api";

/**
 *
 * @param {array} arr
 * @returns A random item from the array
 */
export const getRandom = arr => arr[Math.floor(Math.random() * arr.length)];

/**
 *
 * @param {array} arr
 * @param {number} numItems
 * @returns An array containing numItems # of random, unique items from arr
 */
export const getMultipleRandom = (arr, numItems) => {
	// Copy array so we can mutate it
	const array = [...arr];
	const result = [];

	for (let i = 0; i < numItems; i++) {
		const randomIndex = Math.floor(Math.random() * array.length);
		// Add random item to result array
		result.push(array[randomIndex]);
		// Remove selected item from array to avoid choosing duplicate items
		array.splice(randomIndex, 1);
	}

	return result;
};

/**
 * Gets artists from the Spotify API and returns artist objects
 *
 * @param {string} genre    Genre of artists to get
 * @returns An array of artist objects
 */
export const getArtists = async (token, genre, limit) => {
	const data = await fetchFromSpotify({
		token,
		endpoint: "search",
		params: {
			q: `genre:${genre}`,
			limit: 50,
			type: "artist",
			market: "US"
		}
	});
	console.log("Artist data:", data.artists.items);

	let filteredArtists = data.artists.items.filter(
		artist => artist.popularity > 60
	);
	if (filteredArtists.length < 20) {
		filteredArtists = data.artists.items.filter(
			artist => artist.popularity > 0
		);
	}

	const result = filteredArtists.map(artist => ({
		id: artist.id,
		name: artist.name,
		image: artist.images[0].url || ""
	}));

	console.log("Filtered artists:", result);
	return result;
};

export const getSongs = async (token, artist, genre, limit) => {
	console.log("Artist:", artist);
	const data = await fetchFromSpotify({
		token,
		endpoint: "search",
		params: {
			q: `artist:${artist.name}&20genre:${genre}`,
			limit: 40,
			type: "track",
			market: "US"
		}
	});

	const rawTracks = data.tracks.items;
	console.log("Raw track data:", rawTracks);
	// Filter tracks - excludes tracks without previews and tracks from compilation albums
	const filteredTracks = rawTracks.filter(
		track =>
			track.preview_url &&
			track.album.album_type !== "compilation" &&
			track.explicit === false
	);

	const checkArtistMatch = (track, correctArtistId) => {
		const trackArtists = track.artists;
		for (let i = 0; i < trackArtists.length; i++) {
			if (trackArtists[i].id === correctArtistId) {
				return true;
			}
		}
		return false;
	};

	// Make sure artists list on track contains artist with ID matching correct artist
	const refilteredTracks = filteredTracks.filter(track =>
		checkArtistMatch(track, artist.id)
	);

	console.log("Filtered tracks:", filteredTracks);
	console.log("Refiltered tracks:", refilteredTracks);

	// Map tracks to simpler objects
	const mappedTracks = refilteredTracks.map(({ id, name, preview_url }) => ({
		id,
		name,
		artist,
		preview_url
	}));
	// Get numSongs # of random tracks
	const tracks = getMultipleRandom(mappedTracks, limit);
	console.log(tracks);
	return tracks;
};
