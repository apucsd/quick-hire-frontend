import { baseApi } from '../../base/baseApi';
type TQueryParams = {
    name: string;
    value: string;
}
export const jobsApi = baseApi.injectEndpoints({
    endpoints: (build) => ({

        getJobs: build.query({
            query: (args) => {
                const params = new URLSearchParams()
                if (args) {
                    args.forEach((item: TQueryParams) => params.append(item.name, item.value as string));
                }
                return {
                    url: '/jobs',
                    method: 'GET',
                    params: params,
                }
            },
            providesTags: ['Jobs'],
            transformResponse: (response: any) => response.data,
        }),


        getJobById: build.query({
            query: (id) => ({
                url: `/jobs/${id}`,
                method: 'GET',
            }),
            providesTags: ['Jobs'],
            transformResponse: (response: any) => response.data,
        }),


        createJob: build.mutation({
            query: (data) => ({
                url: '/jobs',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Jobs'],
        }),


        updateJob: build.mutation({
            query: ({ id, ...data }) => ({
                url: `/jobs/${id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['Jobs'],
        }),


        deleteJob: build.mutation({
            query: (id) => ({
                url: `/jobs/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Jobs'],
        }),
    }),
});

export const {
    useGetJobsQuery,
    useGetJobByIdQuery,
    useCreateJobMutation,
    useUpdateJobMutation,
    useDeleteJobMutation,
} = jobsApi;
