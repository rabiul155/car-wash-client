import { baseApi } from '@/redux/api/baseApi';

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (data) => ({
        url: '/bookings',
        method: 'POST',
        body: data,
      }),
    }),
    getMyBooking: builder.query({
      query: () => ({
        url: '/bookings/my-booking',
        method: 'GET',
      }),
      providesTags: ['booking'],
    }),
    updateBooking: builder.mutation({
      query: (query) => ({
        url: '/bookings',
        method: 'PATCH',
        params: query,
      }),
      invalidatesTags: ['booking'],
    }),
    cancelBooking: builder.mutation({
      query: (query) => ({
        url: '/bookings',
        method: 'DELETE',
        params: query,
      }),
      invalidatesTags: ['booking'],
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useUpdateBookingMutation,
  useGetMyBookingQuery,
  useCancelBookingMutation,
} = bookingApi;
