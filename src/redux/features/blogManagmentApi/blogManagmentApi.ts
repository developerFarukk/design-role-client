
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

        // Delete Blog
        deleteBlog: builder.mutation({
            query: ({ id }) => ({
                url: `/blogs/${id}`,
                // url: `http://localhost:5001/api/blogs/${id}`,
                method: 'DELETE',
                // body,
            }),
            invalidatesTags: ['Blogs']
        }),

        // create Product API
        createBlog: builder.mutation({
            query: (data) => ({
                url: '/blogs/create-blog',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Blogs']
        }),

    }),
});

export const {
    useGetAllBlogsQuery,
    useDeleteBlogMutation,
    useCreateBlogMutation

} = blogManagementApi;

