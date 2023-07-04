// import { createStore } from "redux"

// const reudcer = (state={ counter: 0 }, action) => {
//     if (action.type === "INC") {
//         return { counter: state.counter+1 }
//     }
//     else if (action.type === "DEC") {
//         return { counter: state.counter-1 }
//     }
//     else if (action.type === "RES") {
//         return { counter: 0 }
//     }
//     else if (action.type === "ADD") {
//         return { counter: state.counter+action.value };
//     }

//     return state;
// }

// const store = createStore(reudcer);

import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: { counter: 0 },
    reducers: {
        inc(state) {
            state.counter++;
        },
        dec(state) {
            state.counter--;
        },
        add(state, action) {
            state.counter = state.counter + action.payload
        }
    }
})

const store = configureStore({
    reducer: counterSlice.reducer
})

export const counterActions = counterSlice.actions;

export default store;