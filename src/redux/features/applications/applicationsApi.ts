import { baseApi } from '../../base/baseApi';

export const applicationsApi = baseApi.injectEndpoints({
    endpoints: (build) => ({

        submitApplication: build.mutation({
            query: (data) => ({
                url: '/applications',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Applications'],
        }),


        getApplicationsByJob: build.query({
            query: (jobId) => ({
                url: `/applications/job/${jobId}`,
                method: 'GET',
            }),
            providesTags: ['Applications'],
        }),

        getApplications: build.query({
            query: () => ({
                url: `/applications`,
                method: 'GET',
            }),
            providesTags: ['Applications'],
            transformResponse: (response: any) => response.data,
        }),
    }),
});

export const {
    useSubmitApplicationMutation,
    useGetApplicationsByJobQuery,
    useGetApplicationsQuery,
} = applicationsApi;
