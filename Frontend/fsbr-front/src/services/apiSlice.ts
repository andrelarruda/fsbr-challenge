import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Category } from "../types/Category";
import { Product } from "../types/Product";

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.API_BASE_URL ?? 'https://localhost:7215'}),
    endpoints: (builder) => ({
        getCategories: builder.query<Category[], void>({
            query: () => `/api/categories`,
            // providesTags: [`categories`]
        }),
        getCategoryById: builder.query<Category, number>({
            query: (id) => `/api/categories/${id}`
        }),
        createCategory: builder.mutation<void, void>({
            query: (body) => ({
                url: 'api/categories',
                method: 'POST',
                body,
            })
        }),
        deleteCategory: builder.mutation<void, number>({
            query: (id) => ({
                url: `api/categories/${id}`,
                method: 'DELETE',
            })
        }),
        updateCategory: builder.mutation({
            query: (body) => ({
                url: `api/categories/${body.id}`,
                method: 'PUT',
                body,
            })
        }),


        getProducts: builder.query<Product[], void>({
            query: () => '/api/products'
        }),
        getProductById: builder.query<Product, number>({
            query: (id) => `/api/products/${id}`
        }),
    })
});

export const { 
    useGetCategoriesQuery, 
    useGetCategoryByIdQuery, 
    useGetProductsQuery, 
    useGetProductByIdQuery, 
    useCreateCategoryMutation,
    useDeleteCategoryMutation,
    useUpdateCategoryMutation,
} = apiSlice;