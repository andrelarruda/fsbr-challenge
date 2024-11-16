import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Category } from "../types/Category";

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.API_BASE_URL ?? 'https://localhost:7215'}),
    endpoints: (builder) => ({
        getCategories: builder.query<Category[], void>({
            query: () => `/api/categories`,
        }),
        getCategoryById: builder.query<Category, number>({
            query: (id) => `/api/categories/${id}`
        })
    })
});

export const { useGetCategoriesQuery, useGetCategoryByIdQuery } = categoryApi;
