import { baseApi } from "@/redux/api/baseApi";
import { TProject } from "@/types";
import { TQueryParam, TResponseRedux } from "@/types/global";



const projectManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        // Get All Preject
        getAllProjects: builder.query({
            query: (args) => {
                // console.log(args);
                const params = new URLSearchParams();

                if (args) {
                    args.forEach((item: TQueryParam) => {
                        params.append(item.name, item.value as string);
                    });
                }

                return {
                    url: '/projects',
                    method: 'GET',
                    params: params,
                };
            },
            providesTags: ['Projects'],
            transformResponse: (response: TResponseRedux<TProject[]>) => {
                return {
                    data: response.data,
                };
            },
        }),

        // Delete Project
        deletePeoject: builder.mutation({
            query: ({ id }) => ({
                url: `/projects/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Projects']
        }),

        // create Blog
        // createBlog: builder.mutation({
        //     query: (data) => ({
        //         url: '/blogs/create-blog',
        //         method: 'POST',
        //         body: data,
        //     }),
        //     invalidatesTags: ['Blogs']
        // }),

        // Update Blog
        // updateBlog: builder.mutation({
        //     query: ({ id, body }) => ({
        //         url: `/blogs/${id}`,
        //         method: 'PATCH',
        //         body,
        //     }),
        //     invalidatesTags: ['Blogs']
        // }),

    }),
});



export const {
    useGetAllProjectsQuery,
    useDeletePeojectMutation
    

} = projectManagementApi;