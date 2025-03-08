import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  Task,
  CreateTaskRequest,
  UpdateTaskRequest,
} from "../interface/tasks.interface";

export const taskApi = createApi({
  reducerPath: "taskApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: ["Task"],
  endpoints: (builder) => ({
    getTasks: builder.query<Task[], void>({
      query: () => "/tasks",
      providesTags: ["Task"],
    }),
    getTaskById: builder.query<Task, string>({
      query: (id) => `/tasks?id=${id}`,
      providesTags: ["Task"],
    }),
    createTask: builder.mutation<Task, CreateTaskRequest>({
      query: (task) => ({
        url: "/tasks",
        method: "POST",
        body: task,
      }),
      invalidatesTags: ["Task"],
    }),
    updateTask: builder.mutation<Task, UpdateTaskRequest>({
      query: ({ id, ...task }) => ({
        url: `/tasks/${id}`,
        method: "PATCH",
        body: task,
      }),
      invalidatesTags: ["Task"],
    }),
    deleteTask: builder.mutation<void, string>({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Task"],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useGetTaskByIdQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = taskApi;
