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
  }),
});

export const { useLogInMutation, useSignUpMutation } = serviceApi;
