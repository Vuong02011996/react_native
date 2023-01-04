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
/*counterSlice.reducer:  ƒ (state, action) {
      if (!_reducer) _reducer = buildReducer();
      return _reducer(state, action);
    }*/

// The function below is called a thunk and allows us to perform async logic.
// It can be dispatched like a regular action: `dispatch(incrementAsync(10))`.
// This will call the thunk with the `dispatch` function as the first argument.
// Async code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount));
    }, 1000);
};

export default counterSlice.reducer;
