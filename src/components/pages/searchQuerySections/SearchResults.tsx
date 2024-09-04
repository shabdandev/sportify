"use client";
import scss from "./SearchResults.module.scss";
import { useParams } from "next/navigation";
import { useSearchTracksQuery } from "@/redux/api/search";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { LuMusic4 } from "react-icons/lu";

const SearchResults = () => {
  const { searchQuery } = useParams();
  const decodeText = decodeURIComponent(String(searchQuery));
  const { data, isLoading } = useSearchTracksQuery(decodeText);
  const { activeUri, setActiveUri, setTractUris, setTractIndex } =
    usePlayerStore();
  console.log("🚀 ~ SearchResults ~ data:", data);

  const getTrackUris = async (index: number) => {
    const tracksUrisFilter = data?.tracks.items.map((item) => item.uri);
    setTractUris(tracksUrisFilter!);
    setTractIndex(index);
  };

  const filterActiveTrack = (uri: string) => {
    const activeTrack = data?.tracks.items.find((el) => el.uri === uri);
    setActiveUri(activeTrack?.uri!);
  };

  return (
    <section className={scss.SearchResults}>
      <div className="container">
        <div className={scss.content}>
          {isLoading ? (
            <>
              <h1>loading...</h1>
            </>
          ) : (
            <>
              <div className={scss.tracks}>
                {data?.tracks.items.map((item, index) => (
                  <div
                    key={index}
                    className={
                      activeUri === item.uri
                        ? `${scss.track} ${scss.active}`
                        : `${scss.track}`
                    }
                    onClick={() => {
                      filterActiveTrack(item.uri);
                      getTrackUris(index);
                    }}
                  >
                    <img src={item.album.images[0].url} alt="album" />
                    <h2>
                      {item.name}

                      {activeUri === item.uri ? (
                        <span className={scss.mus}>
                          <LuMusic4 />{" "}
                        </span>
                      ) : null}
                    </h2>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchResults;
