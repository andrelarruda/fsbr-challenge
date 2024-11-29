import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../types/Product";

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.API_BASE_URL ?? 'https://localhost:7215'}),
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], void>({
            query: () => '/api/products',
        }),
        getProductById: builder.query<Product, number>({
            query: (id) => `/api/products/${id}`
        }),
    })
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;