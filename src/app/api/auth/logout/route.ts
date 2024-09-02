import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = () => {
  const cookeStrage = cookies();
  cookeStrage.delete("sportify_access_token");
  cookeStrage.delete("spotify_refresh_token");
  return NextResponse.redirect(`${process.env.NEXT_PUBLIC_FRONTEND_URL}`);
};
