# Tổng quan

-   Redux là một thư viện JS lớn nó có thể kết hợp với tất cả các UI framework JS như JS thuần(vanilla JS), React, Angular, VueJS, Ember, jQuery...
-   https://redux.js.org/introduction/getting-started

-   Ở đây ta sử dụng redux trong React nên chỉ học cách sử dụng với React. Có ba trang chính có thể học:

    -   Hai trang hướng dẫn sử dụng React với Redux i chang nhau chỉ khác nhau version React
    -   https://redux.js.org/tutorials/quick-start - Dùng React 17
    -   https://react-redux.js.org/tutorials/quick-start - dùng React 18
    -   https://redux-toolkit.js.org/tutorials/quick-start - Dùng React 17

-   Kiến trúc, cách hoạt động: https://redux.js.org/tutorials/fundamentals/part-1-overview

# Redux vs React

-   React Redux is the official React `UI bindings layer` for Redux. React Redux to bind these two libraries Redux and React.
-   React Redux lets your React components read data from a Redux store, and dispatch actions to the store to update state
-   https://react-redux.js.org/introduction/getting-started
-   https://react-redux.js.org/introduction/why-use-react-redux

-   PREREQUISITES:
    -   ES6 syntax and features
    -   JSX, State, Function Components, Props, and Hooks,
    -   Redux terms and concepts: https://redux.js.org/tutorials/index
        -   Redux Essentials tutorial: Học theo "top-down" tutorial that teaches "how to use Redux the right way",... https://redux.js.org/tutorials/essentials/part-1-overview-concepts RECOMMENED
        -   Học theo "bottom-up" tutorial that teaches "how Redux works", ...https://redux.js.org/tutorials/fundamentals/part-1-overview

## Cài đặt redux vào project React

### Tạo new app với Redux + React

-   `npx create-react-app my-app --template redux`
-   Đã config sẵn Store , Reducer với redux tookit, trong project, ...

### Với Existing React App

-   Cần install `npm install @reduxjs/toolkit react-redux redux` và config store https://redux.js.org/usage/configuring-your-store/

## API Overview - Các hàm sử dụng với redux

\_ https://react-redux.js.org/introduction/getting-started

-   `<Provider />` component: cái mà làm cho redux Store có thể sử dụng cho tất cả các thành phần of your app.

-   `Hooks`: React Redux provides một cặp React hooks cho phép các React component tương tác với Redux Store
    -   `useSelector`: reads a value from the store state and subscribes to updates
    -   `useDispatch`: returns the store's `dispatch method` to let you dispatch actions

## Usage Summary - Các bước cơ bản để thêm , câu hình và sử dụng redux trong dự án React.

### 1. Install Redux Toolkit and React Redux

`npm install @reduxjs/toolkit react-redux`

### 2. Create a Redux Store

-   Create a file named `src/app/store.js`
-   Import the `configureStore` API from Redux Toolkit.
-   We'll start by creating an `empty Redux store`, and exporting it.

### 3. Provide the Redux Store to React

-   Once the store is created, we can make it available to our React components by putting a React Redux <Provider> around our application in `src/index.js`
-   Import the Redux store we just created, put a <Provider> around your <App>, and pass the store as a prop:

### 4. Create a Redux State Slice

-   Add a new file named `src/features/counter/counterSlice.js`
-   In that file, import the `createSlice` API from Redux Toolkit.
-   Tạo một slice là object với string name, giá trị khởi tạo của state, và một hoặc nhiều reducer function để thực hiện cách mà state update.
-   Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice.

### 5. Add Slice Reducers to the Store

-   we need to import the reducer function from the counter slice and add it to our store

### 6. Use Redux State and Actions in React Component

-   Now we can use the `React Redux hooks` to let React components interact with the Redux store.
-   We can read data from the store with `useSelector`, and dispatch actions using `useDispatch`
-   Create a `src/features/counter/Counter.js` file with a <Counter> component inside, then import that component into App.js and render it inside of <App>.
