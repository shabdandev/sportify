import { NextResponse } from "next/server";
import querystring from "querystring";

export const GET = () => {
  const scopes = "user-read-private user-read-email";
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const reditectUri = process.env.SPOTIFY_REDIRECT_URI;

  const queryParams = querystring.stringify({
    response_type: "code",
    client_id: clientId,
    scope: scopes,
    redirect_uri: reditectUri,
  });

  const url = `https://accounts.spotify.com/authorize?${queryParams}`;

  return NextResponse.redirect(url);
};
