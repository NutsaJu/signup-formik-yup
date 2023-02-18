import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../type";

export const reduxApi = createApi({
  reducerPath: "reduxApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    allUser: builder.query({
      query: () => "users?limit=200",
    }),
    addNewUser: builder.mutation<{ name: string }, User>({
      query: (payload) => ({
        url: "users/add",
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useAllUserQuery, useAddNewUserMutation } = reduxApi;
