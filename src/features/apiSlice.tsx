import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const reduxApi = createApi({
  reducerPath: "reduxApi",
  baseQuery: fetchBaseQuery({baseUrl: "https://dummyjson.com/"}),
  endpoints: (builder) => ({
    allUser: builder.query({
      query: () => 'users?limit=200',
    })
  })
 })

 export const {
  useAllUserQuery
 } = reduxApi;