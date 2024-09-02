"use client";
import scss from "./SearchResults.module.scss";
import { useParams } from "next/navigation";
import { useSearchTracksQuery } from "@/redux/api/search";

const SearchResults = () => {
  const { searchQuery } = useParams();
  const decodeText = decodeURIComponent(String(searchQuery));
  const { data, isLoading } = useSearchTracksQuery(decodeText);
  console.log("🚀 ~ SearchResults ~ data:", data);

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
                  <div key={index} className={scss.track}>
                    <img src={item.album.images[0].url} alt="album" />
                    <h2>{item.name}</h2>
                    <audio controls src={item.preview_url} />
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
