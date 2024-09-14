import { baseApi } from '@/redux/api/baseApi';

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createReview: builder.mutation({
      query: (data) => ({
        url: '/reviews',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['review'],
    }),
    getReview: builder.query({
      query: (query) => ({
        url: '/reviews',
        method: 'GET',
        params: query,
      }),
      providesTags: ['review'],
    }),
  }),
});

export const { useGetReviewQuery, useCreateReviewMutation } = bookingApi;
