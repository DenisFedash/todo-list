import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

export const todoSlice = createSlice({
  name: "todos",
  initialState: { todos: [] },
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        title: action.payload.title,
        descript: action.payload.descript,
        completed: false,
      };
      state.todos.push(todo);
    },

    updateCheckbox: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[index].completed = action.payload.completed;
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

export const { addTodo, updateCheckbox } = todoSlice.actions;
