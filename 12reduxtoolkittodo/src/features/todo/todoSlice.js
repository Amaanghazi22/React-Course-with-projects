 import { createSlice, nanoid } from "@reduxjs/toolkit";

 const initialState = {
    todos: [{id: 1, text: "Hello World"}],
 }

 export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            if(state.selectedTodoId === action.payload){
                state.selectedTodoId = null;
            }
        },
        updateTodo: (state, action) => {
            state.selectedTodoId = action.payload;
        }, 
        updateTodoText: (state, action) => {
            const selectedTodo = state.todos.find((todo) => todo.id === state.selectedTodoId);
            if(selectedTodo){
                selectedTodo.text = action.payload
            }
        }
    }
 })

 export const {addTodo, removeTodo, updateTodo, updateTodoText} = todoSlice.actions

 export default todoSlice.reducer
