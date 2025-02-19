
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

    }),
});

export const {
    useGetAllBlogsQuery

} = blogManagementApi;

