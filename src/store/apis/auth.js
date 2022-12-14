import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const baseUrl="http://localhost:4000/api/";
// const baseUrl = "https://sunny-memo-cms.herokuapp.com/api/";
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints(build) {
    return {
      // register: build.mutation({
      //   query(user) {
      //     return {
      //       url: "users",
      //       method: "post",
      //       body: user,
      //     };
      //   },
      // }),
      defaultLogin: build.mutation({
        query(user) {
          return {
            url: "/auth",
            method: "post",
            body: user,
          };
        },
      }),
    };
  },
});

export const { useDefaultLoginMutation } = authApi;
