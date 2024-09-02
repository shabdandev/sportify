import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async () => {
  const accessToken = cookies().get("spotify_access_token")?.value || null;
  return NextResponse.json({ accessToken });
};
