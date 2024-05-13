import { createSlice } from "@reduxjs/toolkit";

const toStorage = (state) => {
    localStorage.setItem('todo', JSON.stringify({ todoList: state.todoList }));
}

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todoList: []
    },
    reducers: {
        addToList: (state, action) => {
            state.todoList = [...state.todoList, action.payload];
            toStorage(state);
        },
        removeFromList: (state, action) => {
            state.todoList = state.todoList.filter(task => task.id !== action.payload.id);
            toStorage(state);
        },
        updateStatus: (state, action) => {
            state.todoList = state.todoList.map(task => task.id !== action.payload.id ? task : action.payload);
            toStorage(state);
        },
        toStorage: toStorage,
        fromStorage: (state, action) => {
            state.todoList = action.payload;
        }
    }
})

export const { addToList, removeFromList, updateStatus, fromStorage } = todoSlice.actions;
export default todoSlice.reducer;