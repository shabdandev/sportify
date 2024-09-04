import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getCategorySeveral: build.query<
      CATEGORY.GetCategoryResponse,
      CATEGORY.GetCategoryRequest
    >({
      query: () => ({
        url: "/browse/categories",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCategorySeveralQuery } = api;
