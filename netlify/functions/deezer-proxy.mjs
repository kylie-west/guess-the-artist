const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  const { artist, trackTitle } = event.queryStringParameters;

  if (!artist || !trackTitle) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing artist or trackTitle parameter" }),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    };
  }

  const deezerUrl = `https://api.deezer.com/search?q=artist:"${artist}" track:"${trackTitle}"`;

  try {
    const response = await fetch(deezerUrl);
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    };
  } catch (error) {
    console.error("Error fetching from Deezer:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    };
  }
};
