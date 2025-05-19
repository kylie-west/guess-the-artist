import {
  fetchFromSpotify,
  fetchPreviewFromDeezer,
} from "../services/rest-service";

/**
 *
 * @param {array} arr
 * @returns A random item from the array
 */
export const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

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
export const getArtists = async (token, genre) => {
  const data = await fetchFromSpotify({
    token,
    endpoint: "search",
    params: {
      q: `genre:${genre}`,
      limit: 50,
      type: "artist",
      market: "US",
      offset: Math.floor(Math.random() * 20),
    },
  });
  console.log("Artist data:", data.artists.items);

  const filteredArtists = data.artists.items.filter(
    (artist) => artist.popularity > 50 && artist.images.length > 0
  );

  const result = filteredArtists.map((artist) => ({
    id: artist.id,
    name: artist.name,
    image: artist.images[0].url || "",
  }));

  console.log("Filtered artists:", result);
  return result;
};

export const getSongs = async (token, artist, limit) => {
  const data = await fetchFromSpotify({
    token,
    endpoint: `artists/${artist.id}/top-tracks`,
  });

  const rawTracks = data.tracks;
  console.log("Raw track data:", rawTracks);

  // Filter tracks - exclude tracks from compilation albums
  const filteredTracks = rawTracks.filter(
    (track) => track.album.album_type !== "compilation"
  );

  // Get numSongs # of random tracks
  const randomTracks = getMultipleRandom(filteredTracks, limit);

  // Map tracks to simpler objects + fetch preview URLs from Deezer
  const mappedTracks = await Promise.all(
    randomTracks.map(async ({ id, name }) => {
      const previewUrl = await fetchPreviewFromDeezer({
        artist: artist.name,
        trackTitle: name,
      });
      if (!previewUrl) {
        return;
      }
      return {
        id,
        name,
        artist,
        previewUrl,
      };
    })
  );

  // Remove undefined
  const tracks = mappedTracks.filter((track) => !!track);

  console.log("Final tracks:", tracks);
  return tracks;
};
