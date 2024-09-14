// src/features/api/productApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Create the API slice
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    // Fetch all products
    getAllProducts: builder.query({
      query: () => 'products', 
    }),
    // Get a single product by ID
    getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),
    // Search for products by query
    searchProducts: builder.query({
      query: (searchQuery) => `products/search?q=${searchQuery}`,
    }),
    // Get all product categories
    getAllCategories: builder.query({
      query: () => 'products/category',
    }),
    // Get products category-list
    getProductsByCategory: builder.query({
      query: () => `products/category-list`,
    }),
    // Get products by a category
    getCategoryData: builder.query({
      query: (category) => `products/category/${category}`,
    }),
    
  }),
});

// Export hooks for each endpoint
export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useSearchProductsQuery,
  useGetAllCategoriesQuery,
  useGetProductsByCategoryQuery,
  useGetCategoryDataQuery,
} = productApi;
