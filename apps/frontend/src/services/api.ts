import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Product } from '@mercado-libre/shared'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: process.env.NEXT_PUBLIC_API_URL || '',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json')
      headers.set('Accept', 'application/json')
      headers.set('x-api-key', process.env.API_KEY || '')
      
      return headers
    }
  }),
  endpoints: (build) => ({
    getProducts: build.query<Product[], void>({
      query: () => 'products',
    }),
    getProductById: build.query<Product, string>({
      query: (id) => `products/${id}`,
    }),
  }),
})

export const { useGetProductByIdQuery, useGetProductsQuery } = productsApi