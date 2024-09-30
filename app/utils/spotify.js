const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const RECENTLY_PLAYED_ENDPOINT =
  "https://api.spotify.com/v1/me/player/recently-played?limit=1";

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basicAuth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  });

  // Log response for debugging
  const responseText = await response.text();

  if (!response.ok) {
    throw new Error(
      `Failed to get access token: ${response.status} ${response.statusText}`
    );
  }

  return JSON.parse(responseText);
};

export const getLastPlayedTrack = async () => {
  try {
    // Get Access Token
    const { access_token } = await getAccessToken();

    // If the access token is undefined or empty, exit early
    if (!access_token) {
      throw new Error("Access token is undefined or empty");
    }

    // Make the request to Spotify's recently played endpoint
    const response = await fetch(RECENTLY_PLAYED_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    // Log the full response text if it fails
    if (!response.ok) {
      const responseText = await response.text();
      console.error(
        "Failed to fetch recently played track:",
        response.status,
        response.statusText,
        responseText
      );
      throw new Error(
        `Failed to fetch recently played track: ${response.status} ${response.statusText}`
      );
    }

    // Parse and log the JSON data
    const data = await response.json();

    // Check if there are items in the response and return the track
    if (data.items && data.items.length > 0) {
      return data.items[0].track;
    }

    // Log that no track was found
    console.log("No recently played track found");
    return null;
  } catch (error) {
    // Log and rethrow any error for further debugging
    console.error("Error in getLastPlayedTrack:", error.message);
    throw error;
  }
};
