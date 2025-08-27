import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: 'http://localhost:3000/api/v1',
    baseUrl: 'https://digital-wallet-system-backend-znuw.onrender.com/api/v1',
    credentials: "include"
  }),
  endpoints: (build) => ({


    // ------------- Auth ----------------
    
    userLogin: build.mutation({
      query: ({phone, pin}) => ({
        url: "/auth/login",
        method: "POST",
        body: {phone, pin}
      })
    }),
    userLogout: build.query({
      query: () => "/auth/logout"
    }),
    refreshToken: build.query({
      query: () => "/auth/refresh-token"
    }),
    
    
    
    // ------------- User/agent ----------------
    
    getProfile: build.query({
      query: () => "/user/get-info-me"
    }),
    registerUser: build.mutation({
      query: ({name, phone, pin, role}) => ({
        url: "/user/create-user",
        method: "POST",
        body: {name, phone, pin, role}
      })
    }),
        
    


    
    // ------------- Transaction ----------------
    
    getMyTransactions: build.query({
      query: () => "/transaction/get-transaction-me"
    }),
    transferMoney: build.mutation({
      query: ({phone, amount, transactionType}) => ({
        url: `/transaction/${transactionType}`,
        method: "POST",
        body: {phone, amount}
      })
    }),
    addMoney: build.mutation({
      query: ({amount, transactionType}) => ({
        url: `/transaction/add-money/${transactionType}`,
        method: "POST",
        body: {amount}
      })
    }),




    // ------------- Admin ----------------

    createAdmin: build.mutation({
      query: ({name, phone, pin, role}) => ({
        url: "/user/create-admin",
        method: "POST",
        body: {name, phone, pin, role}
      })
    }),
    getAllUser: build.query({
      query: () => "/user/get-user"
    }),
    searchUser: build.mutation({
      query: ({phone}) => ({
        url: "/user/search-user",
        method: "POST",
        body: {phone}
      })
    }),
    updateUserStatus: build.mutation({
      query: ({isBlocked, id}) => ({
        url: `/user/update-status/${id}`,
        method: "PATCH",
        body: {isBlocked}
      })
    }),
    deleteUser: build.query({
      query: ({id}) => `/user/delete-user/${id}`
    }),
    updateUserWalletStatus: build.mutation({
      query: ({status, id}) => ({
        url: `/wallet/update-status/${id}`,
        method: "PATCH",
        body: {status}
      })
    }),

  })
})










export const { 
  //----------auth
  useUserLoginMutation, useLazyUserLogoutQuery, useLazyRefreshTokenQuery,

  //----------user/agent---------
  useGetProfileQuery, useRegisterUserMutation,
  

  //----------Transaction
  useTransferMoneyMutation, useAddMoneyMutation,
  useLazyGetMyTransactionsQuery, useGetMyTransactionsQuery,


  //----------admin---------
  useCreateAdminMutation, useGetAllUserQuery, useSearchUserMutation, useUpdateUserStatusMutation, useLazyDeleteUserQuery, useUpdateUserWalletStatusMutation


} = baseApi
