import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import querystring from "querystring";
import axios from "axios";

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;

  const { data } = await axios.post(
    "https://accounts.spotify.com/api/token",
    querystring.stringify({
      grant_type: "authorization_code",
      code: code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
    })
  );

  const { expires_in, access_token, refresh_token } = data;

  const cookieStorage = cookies();
  cookieStorage.set("spotify_access_token", access_token, {
    path: "/",
    maxAge: expires_in,
  });
  cookieStorage.set("spotify_refresh_token", refresh_token, {
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return NextResponse.redirect(`${process.env.NEXT_PUBLIC_FRONTEND_URL}`);
};
