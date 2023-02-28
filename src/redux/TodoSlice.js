import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

const persistConfig = {
  key: "root",
  storage,
};

export const persistedTodoList = persistReducer(
  persistConfig,
  todoSlice.reducer
);

export const { addTodo, deleteTodo } = todoSlice.actions;
