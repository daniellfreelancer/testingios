import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const userAPI = createApi({
    reducerPath: 'userAPI',

    baseQuery:fetchBaseQuery({
        baseUrl: 'https://whale-app-qsx89.ondigitalocean.app'
    }),

    endpoints:(builder) => ({
        signInUser: builder.mutation({
            query: (user) => ({
                url: '/admin/login',
                method: 'POST',
                body: user,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
        }),
        signOutUser: builder.mutation({
            query: (user) => ({
                url: '/admin/logout',
                method: 'POST',
                body: user,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
        }),
        updateUser: builder.mutation({
            query: (rut, ...formData) => ({
                url: `/admin/update/${rut}`,
                method: 'PATCH',
                body: formData,
                headers: {
                    'Content-type': 'multipart/form-data',
                },
            })
        }),
        resetPassword: builder.mutation({
            query: (user) => ({
                url: '/admin/reset',
                method: 'POST',
                body: user,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
        })

    })
})

export default userAPI
export const { useSignUpUserMutation, useSignInUserMutation, useSignOutUserMutation, useUpdateUserMutation} = userAPI