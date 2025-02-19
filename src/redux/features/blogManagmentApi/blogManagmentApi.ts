
import { baseApi } from "@/redux/api/baseApi";
import { Blog } from "@/types";
import { TQueryParam, TResponseRedux } from "@/types/global";



const blogManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        // Get All Bicycle
        getAllBlogs: builder.query({
            query: (args) => {
                // console.log(args);
                const params = new URLSearchParams();

                if (args) {
                    args.forEach((item: TQueryParam) => {
                        params.append(item.name, item.value as string);
                    });
                }

                return {
                    url: '/blogs',
                    method: 'GET',
                    params: params,
                };
            },
            providesTags: ['Blogs'],
            transformResponse: (response: TResponseRedux<Blog[]>) => {
                return {
                    data: response.data,
                };
            },
        }),

        // getAllBlogs: builder.query<Blog, string>({
        //     query: () => `pokemon/${name}`,
        // }),


    }),
});

export const {
    useGetAllBlogsQuery

} = blogManagementApi;



// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// // Define a service using a base URL and expected endpoints
// export const blogApi = createApi({
//     reducerPath: 'blogApi',
//     baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5001/api/' }),
//     endpoints: (builder) => ({

//         getAllBlog: builder.query({
//             query: () => "/blogs",
//         }),
//     }),
// })

// // Export hooks for usage in functional components, which are
// // auto-generated based on the defined endpoints
// export const { useGetAllBlogQuery } = blogApi