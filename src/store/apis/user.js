import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const baseUrl="http://localhost:4000/api/";
// const baseUrl = "https://sunny-memo-cms.herokuapp.com/api/";
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    // prepareHeaders: (headers, { getState }) => {
    //   const token = getState().auth.token;
    //   if (token) headers.set("authorization", `Bearer ${token}`);
    //   return headers;
    // },
  }),
  endpoints(build) {
    return {
      createUser: build.mutation({
        query(user) {
          return {
            url: "users",
            method: "post",
            body: user,
          };
        },
      }),
      addBookToUser: build.mutation({
        query({ userId, bookName, author,wordCount }) {
          return {
            url: `users/${userId}`,
            method: "post",
            body: { bookName, author, wordCount },
          };
        },
      }),
      getBooksByUserId: build.query({
        query(id) {
          return `users/${id}/books`;
        },
      }),
      updateBookFromUser: build.mutation({
        query({ userId, bookId, book }) {
          return {
            url: `users/${userId}/books/${bookId}`,
            method: "put",
            body: book,
          };
        },
      }),
      deleteBookFromUser: build.mutation({
        query({ userId, bookId }) {
          return {
            url: `users/${userId}/books/${bookId}`,
            method: "delete",
          };
        },
      }),
    };
  },
});

export const {
  useCreateUserMutation,
  useAddBookToUserMutation,
  useGetBooksByUserIdQuery,
  useUpdateBookFromUserMutation,
  useDeleteBookFromUserMutation,
} = userApi;
