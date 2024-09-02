import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    searchTracks: build.query<
      SEARCH.SearchTracksResponse,
      SEARCH.SearchTracksRequest
    >({
      query: (query) => ({
        url: "/search",
        method: "GET",
        params: {
          q: query,
          type: "track",
          limit: 10,
        },
      }),
    }),
  }),
});

export const { useSearchTracksQuery } = api;
