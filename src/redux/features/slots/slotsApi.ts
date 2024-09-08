import { baseApi } from '@/redux/api/baseApi';

const slotsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTimeSlots: builder.query({
      query: (queryStr) => ({
        url: '/slots',
        method: 'GET',
        params: queryStr,
      }),
    }),
  }),
});

export const { useGetTimeSlotsQuery } = slotsApi;
