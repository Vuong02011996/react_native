import { createSlice } from '@reduxjs/toolkit';

// Định nghĩa actions and reducer ở đây
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

// Chú ý cách tạo ra các creators action trong reduxtoolkit ,
// viết luôn trong field reducers nên không cần tạo ra file actions
// cũng như xét switch case hoặc if else trong reducers, gần giống với todo lib với thư viện 30 line

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

console.log('counterSlice.reducer: ', counterSlice.reducer);
export default counterSlice.reducer;
