import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

import { USERS_URL, BASE_URL } from '../../constants';

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const userApiSlice = createApi({
  reducerPath: 'userApiSlice',

  baseQuery,
  tagTypes: ['Products', 'Order', 'User'],
  endpoints: (builder) => ({
    // login: builder.mutation({
    //   query: (data) => ({
    //     url: `${USERS_URL}/auth`,
    //     method: 'POST',
    //     body: data,
    //   }),
    // }),
    login: builder.mutation({
      query: (body: { email: string; password: string }) => {
        return {
          url: `${USERS_URL}/auth`,

          method: 'post',
          body,
        };
      },
    }),
    register: builder.mutation({
      query: (data: any) => ({
        url: `${USERS_URL}`,
        method: 'POST',
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: 'POST',
      }),
    }),
    profile: builder.mutation({
      query: (data: any) => ({
        url: `${USERS_URL}/profile`,
        method: 'PUT',
        body: data,
      }),
    }),
    getUsers: builder.query({
      query: () => ({
        url: USERS_URL,
      }),
      providesTags: ['User'],
      keepUnusedDataFor: 5,
    }),
    deleteUser: builder.mutation({
      query: (userId: any) => ({
        url: `${USERS_URL}/${userId}`,
        method: 'DELETE',
      }),
    }),
    getUserDetails: builder.query({
      query: (id) => ({
        url: `${USERS_URL}/${id}`,
      }),
      keepUnusedDataFor: 5,
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/${data.userId}`,
        method: 'PUT',
        body: data,
      }),
      // invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useProfileMutation,
  useGetUsersQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useGetUserDetailsQuery,
} = userApiSlice;
