"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DebounceInput } from "react-debounce-input";

const SearchTracks = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    if (searchQuery) {
      router.push(`/search/${searchQuery}`);
    } else {
      router.push(`/search`);
    }
  }, [searchQuery]);

  return (
    <>
      <DebounceInput
        debounceTimeout={300}
        minLength={2}
        value={searchQuery}
        placeholder="Что хочешь включить?"
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        onFocus={() => {
          router.push("/search");
        }}
      />
    </>
  );
};

export default SearchTracks;
