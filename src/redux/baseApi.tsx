import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/v1',
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



    // ------------- User ----------------
    
    getProfile: build.query({
      query: () => "/user/get-info-me"
    }),
    
    
    
    // ------------- Transaction ----------------
    
    getMyTransactions: build.query({
      query: () => "/transaction/get-transaction-me"
    }),
    transferMoney: build.mutation({
      query: ({phone, amount, type}) => ({
        url: `/transaction/${type}`,
        method: "POST",
        body: {phone, amount}
      })
    }),
    addMoney: build.mutation({
      query: ({amount, type}) => ({
        url: `/transaction/add-money/${type}`,
        method: "POST",
        body: {amount}
      })
    }),

  })
})


export const { 
  useUserLoginMutation, useLazyUserLogoutQuery, 
  useGetProfileQuery,
  useTransferMoneyMutation, useAddMoneyMutation,
  useGetMyTransactionsQuery
 } = baseApi
