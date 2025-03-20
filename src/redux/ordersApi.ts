import { IOrder } from "@/types/orders";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_DATA_PATH,
  }),
  endpoints: (build) => ({
    getOrders: build.query<IOrder[], void>({
      query: () => `orders`,
    }),
    getOrder: build.query<IOrder[], string>({
      query: (transactionId) => `orders?transactionId=${transactionId}`,
    }),
  }),
});

export const { useGetOrdersQuery, useGetOrderQuery } = ordersApi;
