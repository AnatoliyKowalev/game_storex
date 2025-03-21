import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { clearUser, setUser } from "./slices/userSlice";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_DATA_PATH, // Make sure this is the correct base URL for your JSON Server
  }),
  endpoints: (build) => ({
    // Create a signUp mutation
    signUp: build.mutation({
      query: ({ emailMob, password }) => ({
        url: "/users", // Assuming this is where you store your users in db.json
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          email: emailMob,
          password,
          id: `user-${Date.now()}`, // Create a unique ID based on timestamp
        },
      }),
    }),
    login: build.mutation({
      query: () => ({
        url: "/users", // Assuming 'users' is the collection in your db.json
        method: "GET", // Use GET to fetch users and filter by email & password
      }),
      async onQueryStarted({ email, password }, { dispatch, queryFulfilled }) {
        try {
          // Perform the query to get all users from the database
          const { data } = await queryFulfilled;

          // Check if a user exists with the matching email and password
          const user = data.find(
            // @ts-ignore
            (user) => user.email === email && user.password === password
          );

          if (user) {
            dispatch(setUser({ email: user.email }));
          } else {
            dispatch(clearUser("Incorrect email or password!"));
          }
        } catch (error) {
          dispatch(clearUser("Some error occuered. Please try later!"));
        }
      },
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation } = authApi;
