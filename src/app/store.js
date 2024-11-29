import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../feature/todo/todoSlicec";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
