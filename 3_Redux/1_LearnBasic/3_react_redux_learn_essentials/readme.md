# 3 Part

https://redux.js.org/tutorials/essentials/part-1-overview-concepts
https://redux.js.org/understanding/thinking-in-redux/glossary

## Part 1: Redux Terms and Concepts

-   Cover the key concepts and terms you need to know to use Redux
-   What is Redux? - `Redux` is a pattern and library for `managing and updating application state`, using events called "actions"
-   Why Should I Use Redux ? - `Redux` helps you manage "global" state - state that is needed across many parts of your application

### Immutability

-   In order to update values immutably, your code must make copies of existing objects/arrays, and then modify the copies
-   Redux expects that all state updates are done immutably

### Terminology

-   `Actions`: an action as an event that describes something that happened in the application.
-   `Action Creators`: An action creator is a function that creates and returns an action object
-   `Reducers`: A reducer is a function that receives the current state and an action object, decides how to update the state.You can think of a reducer as an event listener which handles events based on the received action (event) type.
-   `Store`: The current Redux application state lives in an object.

## Part 2: Redux App Structure

-   We'll examine a basic React + Redux app to see how the pieces fit together.

## Part 3: Basic Redux Data Flow

-   we'll use that knowledge to build a small social media feed app
-   how those pieces actually work in practice
-   talk about some important patterns and guidelines for using Redux.
