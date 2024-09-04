"use client";
import scss from "./Footer.module.scss";
import axios from "axios";
import { useEffect } from "react";
import { usePlayerStore } from "@/stores/usePlayerStore";
import SpotifyWebPlayer from "react-spotify-web-playback";

const Footer = () => {
  const { accessToken, trackIndex, trackUris, setTractIndex, setAccessToken } =
    usePlayerStore();

  const getAccessToken = async () => {
    const { data } = await axios.get("/api/auth/get-access-token");
    setAccessToken(data.accessToken);
  };

  useEffect(() => {
    getAccessToken();
  }, []);

  return (
    <footer className={scss.Footer}>
      <div className={scss.container}>
        <div className={scss.content}>
          <SpotifyWebPlayer
            token={accessToken}
            offset={trackIndex!}
            callback={(state) => {
              if (state.isPlaying) {
                const activeTrackIndex = trackUris.findIndex(
                  (uri) => uri === state.track.uri
                );
                setTractIndex(activeTrackIndex);
              }
            }}
            uris={trackUris}
            styles={{
              activeColor: "#fff",
              bgColor: "#333",
              color: "#fff",
              loaderColor: "#fff",
              sliderColor: "#1cb954",
              trackArtistColor: "#ccc",
              trackNameColor: "#fff",
            }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
