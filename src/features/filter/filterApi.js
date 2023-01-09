import { api } from "../api/api";

export const filterApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getFilter: builder.query({
      query: () => ({
        url: "/filter",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetFilterQuery } = filterApi;
