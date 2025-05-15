export async function getAccessToken() {
  const res = await fetch("/.netlify/functions/getSpotifyToken");
  const data = await res.json();
  return data.access_token;
}
