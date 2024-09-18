import { baseApi } from '@/redux/api/baseApi';

const slotsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTimeSlots: builder.query({
      query: (queryStr) => ({
        url: '/slots',
        method: 'GET',
        params: queryStr,
      }),
      providesTags: ['slot'],
    }),
    createSlots: builder.mutation({
      query: (data) => ({
        url: '/slots',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['slot'],
    }),
    updateSlots: builder.mutation({
      query: (data) => ({
        url: '/slots',
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['slot'],
    }),
  }),
});

export const {
  useGetTimeSlotsQuery,
  useCreateSlotsMutation,
  useUpdateSlotsMutation,
} = slotsApi;
