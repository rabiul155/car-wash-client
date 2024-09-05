import { baseApi } from '@/redux/api/baseApi';

const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createService: builder.mutation({
      query: (data) => ({
        url: '/services',
        method: 'POST',
        body: data,
      }),
    }),
    getServices: builder.query({
      query: (queryStr) => ({
        url: '/services',
        method: 'GET',
        params: queryStr,
      }),
      providesTags: ['service'],
    }),
    updateService: builder.mutation({
      query: ({ id, data }) => {
        console.log(data);
        return {
          url: `/services/${id}`,
          method: 'PATCH',
          body: data,
        };
      },
      invalidatesTags: ['service'],
    }),
    getSingleService: builder.query({
      query: (id) => ({
        url: `/services/${id}`,
        method: 'GET',
      }),
      providesTags: ['service'],
    }),
    deleteService: builder.mutation({
      query: (id) => ({
        url: `/services/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['service'],
    }),
  }),
});

export const {
  useCreateServiceMutation,
  useGetServicesQuery,
  useGetSingleServiceQuery,
  useDeleteServiceMutation,
  useUpdateServiceMutation,
} = serviceApi;
