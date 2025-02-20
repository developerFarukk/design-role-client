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

        // create Project
        createProject: builder.mutation({
            query: (data) => ({
                url: '/projects/create-project',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Projects']
        }),

        // Update Blog
        updateProject: builder.mutation({
            query: ({ id, body }) => ({
                url: `/projects/${id}`,
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['Projects']
        }),

    }),
});



export const {
    useGetAllProjectsQuery,
    useDeletePeojectMutation,
    useCreateProjectMutation,
    useUpdateProjectMutation
    

} = projectManagementApi;