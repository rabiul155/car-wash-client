import { baseApi } from '@/redux/api/baseApi';

const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => ({
        url: '/auth/signup',
        method: 'POST',
        body: data,
      }),
    }),

    logIn: builder.mutation({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
      }),
    }),

    getUser: builder.query({
      query: () => ({
        url: '/auth',
        method: 'GET',
      }),
      providesTags: ['user'],
    }),

    updateRole: builder.mutation({
      query: (data) => ({
        url: '/auth',
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['user'],
    }),
    updateUser: builder.mutation({
      query: ({ _id, user }) => ({
        url: `/auth/${_id}`,
        method: 'PATCH',
        body: user,
      }),
      invalidatesTags: ['user'],
    }),
  }),
});

export const {
  useLogInMutation,
  useSignUpMutation,
  useGetUserQuery,
  useUpdateRoleMutation,
  useUpdateUserMutation,
} = serviceApi;
