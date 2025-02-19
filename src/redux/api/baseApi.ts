


import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    // baseUrl: "http://localhost:5001/api/",
    baseUrl: `${process.env.NEXT_PUBLIC_BASEURL_SERVER}/api/`,
    credentials: "include",
});

export const baseApi = createApi({
    reducerPath: "baseApi",
    tagTypes: ["Blogs"],
    baseQuery: baseQuery,
    endpoints: () => ({}),
});