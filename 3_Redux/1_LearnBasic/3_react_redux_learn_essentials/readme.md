# 3 Part

https://redux.js.org/tutorials/essentials/part-1-overview-concepts
https://redux.js.org/understanding/thinking-in-redux/glossary

## Part 1: Redux Terms and Concepts

-   You'll learn:

    -   Cover the key concepts and terms you need to know to use Redux
    -   How data flows through a Redux app.

-   What is Redux? - `Redux` is a pattern and library for `managing and updating application state`, using events called "actions"
-   Why Should I Use Redux ? - `Redux` helps you manage "global" state - state that is needed across many parts of your application

### Immutability

-   In order to update values immutably, your code must make copies of existing objects/arrays, and then modify the copies
-   Redux expects that all state updates are done immutably

### Terminology

-   `1. Actions`: an action as an event that describes something that happened in the application.
-   `2. Action Creators`: An action creator is a function that creates and returns an action object
-   `3. Reducers`: A reducer is a function that receives the current state and an action object, decides how to update the state.You can think of a reducer as an event listener which handles events based on the received action (event) type. Reducers act like event listeners
-   `4. Store`: The current Redux application state lives in an object.The store is created by passing in a reducer.
-   `5. Dispatch`: The only way to update the state is to call `store.dispatch()` and pass in an action object
-   `6. Selectors`: are functions that know how to extract specific pieces of information from a store state value

## Part 2: Redux App Structure

-   You'll learned:

    -   The structure of a typical React + Redux app
    -   How to view state changes in the Redux DevTools Extension:

-   Using The Counter Example App in `2_react_redux_learn_app`
-   Open up your browser's DevTools. Then, choose the` "Redux" tab in the DevTools`.

### Creating the Redux Store

-   `Store:`
    -   Redux store is created using the `configureStore function` from `Redux Toolkit`
    -   `configureStore requires` that we pass in a `reducer argument`
    -   The key names in the object will define the keys in our final state value. Tức là tên field của reducer chính là key mà ta muốn state chấm tới trong component sử dụng state.(`state.counter`). Và không cần giống tên name reducer ở `createSlice`.
    -   `configureStore` automatically adds several `middleware` to the store setup by default
-   `Redux Slices`:
    -   A "slice" is a collection of Redux reducer logic and actions for a single feature in your app.
    -   So if we have many different slice reducer functions, how do we get a single `root reducer` instead
        -   Using calling all of the slice reducers by hand.
        -   Redux has a function called `combineReducers` that does this for us automatically
        -   Khi đó ta chỉ cần pass to `configureStore` một root reducer

### Creating Slice Reducers and Actions

-   Redux Toolkit has a function called `createSlice`, which takes care of the work of generating action type strings, action creator functions, and action objects.

-   `{type: "counter/increment"}`
-   Tên name trong object should be first part of each action type.
-   key name of each `reducer function` is used as the second part.
-   `createSlice` automatically generates action creators with the same names as the reducer functions we wrote

### Reducers and Immutable Updates

-   You can only write "mutating" logic in Redux Toolkit's `createSlice` and `createReducer` because they use Immer inside

### Writing Async Logic with Thunks

-   A `thunk` is a specific kind of Redux function that can contain asynchronous logic.
-   using thunks requires that the `redux-thunk middleware `(a type of plugin for Redux) be added to the Redux store when it's created

## Part 3: Basic Redux Data Flow

-   we'll use that knowledge to build a small social media feed app
-   how those pieces actually work in practice
-   talk about some important patterns and guidelines for using Redux.

#

-   Đang dừng ở Writing Async Logic with Thunks
