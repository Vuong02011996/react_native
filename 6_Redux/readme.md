# Flow data in FE - State magagements tool(React/Hook - React/redux)
## So sánh redux vs hook/Context
+ Cách hoạt động tương tự nhau.
+ Ưu điểm của redux với hook context
    + Dễ debug, có tool dễ quan sát state thay đổi trong ứng dụng.
    + Cung cấp một kiến trúc sẵn sàng apply middleware (saga, thunk, logger..), context phải tự viết ra middleware
    + Addons dễ  dàng mở rộng
    + Đa nền tảng, sử dụng tất cả dự án bằng JS kể cả code thuần, Hook context chỉ dùng với React
    + Performance hơn hẵn dùng context
        + Vì Hook context dùng Provider có useReducer nên mỗi lần state thay đổi thì tất cả component đều thay đổi.
        + Redux đã xử lí ở component nào thay đổi thì chỉ có component đó render lại.

=> hook/Context: dùng cho ứng dụng vừa nhỏ, và các chức năng ít set lại state(theme)
=> Còn lại nên dùng redux.

+ https://nvksolution.com/so-sanh-giua-redux-va-react-hooks/
    + `useContext` chúng ta có thể chia sẻ state tới các `component`, `useReducer` thì cho phép chúng ta cập nhật giá trị mới cho state giống như là `Redux`.
    + `useEffect` chúng ta có thể viết các `action` và `dispatch` chúng tới `reducer`

# Redux
## Giới thiệu
+ Khi một ứng dụng single page lớn số lượng state nhiều nên việc quản lí state trở nên phức tạp.
+ Do đó Redux đã được xây dựng dựa trên nền tảng tư tưởng của ngôn ngữ `Elm` và kiến trúc `Flux` do Facebook giới thiệu.
+ Lý do đầu tiên mà các developer thường xuyên áp dụng Redux trong các dự án là vì khả năng `chia sẻ state giữa các component`
+ https://viblo.asia/p/redux-cho-nguoi-moi-bat-dau-part-1-introduction-ZjleaBBZkqJ

## Khi nào sử dụng redux
+ Dữ liệu được sử dụng ở nhiều nơi nên cần lôi lên redux làm global state.
+ Vì nếu cùng action và cùng state thì sẽ cho ra state mới giống nhau nên hổ trợ undo/redo
+ Cần cache dữ liệu tái sử dụng cho những lần sau.(ví dụ gọi API 1 lần lần sau sử dụng lại dữ liệu đó)

## Cấu trúc và Nguyên lý hoạt động
+ https://www.youtube.com/watch?v=Sq_Qt8PWf_Y&list=PLeS7aZkL6GOvCz3GiOtvtDXChJRuebb7S
+  Store -> View -> Action : luôn đi theo một chiều.

+ https://niithanoi.edu.vn/tu-hoc-reactjs.html#iii1-gioi-thieu-redux
### Cấu trúc:
+ Gồm 3 phần:
+ `Store`: `state` được lưu trữ dưới dạng một `đối tượng` (object) đơn giản, được gọi là store.
        ```
        {
            students: [
                {
                    name: "Ngọc Anh"
                }, 
                {
                    name: "Vũ Hà"
                }],
            toggle: true
        }
        ```
+ `Action`: là một JS object -> thông tin mô tả làm cái gì với Store -> được gửi đến Store
        + Các action được thể hiện bằng đối tượng JavaScript đơn giản và bắt buộc phải có thuộc tính `type`(type phải được viết theo `SNAKE_CASE`)
        ```
            { 
                type: "ADD_STUDENT", 
                name: "Thu Hương"
            }
        ```
        + Để sử dụng cùng một action với các dữ liệu (`payload`) khác nhau, cũng như tạo code có thể tái sử dụng, chúng ta có thể tạo `Action creators`. Khi đó ta có thể tạo action với nhiều dữ liệu khác nhau mà ta truyền vào hàm.

        ```
            // Action creators
            function addStudent(student) {
                return {
                    type: 'ADD_STUDENT',
                    payload: student
                }
            }
        ```
+ `Reducer`: là các hàm xử lí các action 
        + Lấy trạng thái hiện tại và hành động làm tham số của nó và trả về trạng thái mới.
        + `Một reducer` có thể xử lý `nhiều action`, do đó, thường chúng ta sử dụng câu lệnh `switch` bên trong nó.
        ```
        function studentsApp(state, action) {
            // Câu lệnh switch Kiểm tra type và trả về sate mới
            switch (action.type) {
                case "ADD_STUDENT":
                    return [ ...state,  action.name ]
                default:
                    // Không có case nào khớp thì trả về state hiện tại
                    return state
            }
        ```

+ Để liên kết `store` và `action` với nhau, chúng ta `cần viết một hàm`, được gọi là `reducer` - Nó nhận state và action làm đối số và trả về state tiếp theo của ứng dụng.


### Những nguyên lý trong redux:
+ Toàn bộ state của ứng dụng được lưu trữ trong một `store` duy nhất. Chỉ nên có `một store duy nhất` trong một ứng dụng.
+ Bạn chỉ có thể thay đổi state thông qua `action`. Action thì chứa thông tin mà bạn muốn thay đổi(type action, payload)
+ `Reducer xử lý các action và trả về state tiếp theo của ứng dụng`. Reducers cần phải thuần túy, nghĩa là chúng không thể sửa đổi state, chúng cần trả về một đối tượng state mới.

# Middleware trong redux
+ Redux có 2 bộ thư viện được coi là mạnh nhất là `Redux-thunk` và `Redux-saga`, 
    + redux-saga : https://co-well.vn/nhat-ky-cong-nghe/react-redux-reduxsaga-bo-ba-hoan-hao-cho-mot-ung-dung-react/
        + Redux-Saga là một thư viện redux middleware (Trong Redux, middleware là một lớp nằm giữa Reducers và Dispatch Action) giúp bạn quản lý những `side effect` trong redux.
        + Redux-Saga sử dụng Generators (function*) của ES6 để xử lý “`bất đồng bộ`” một cách “đồng bộ”.
        + Hơn nữa vì `Saga sử dụng generator function` nên mình sẽ `không cần phải dùng promise để then`, catch nhiều khi gặp bất đồng bộ. mà chỉ dùng `keyword yield` nổi tiếng.


# Installation
+ https://redux.js.org/introduction/getting-started

+ Dùng với JS thuần:
    + Dùng link cdn của redux.


+ Dùng với react:
    + redux vs toolkit: `npm install @reduxjs/toolkit`
    + `npm install redux` : bản thân Redux chỉ là một thư viện nhỏ, có thể được sử dụng với các công nghệ khác nhau. Để sử dụng với React ta cài thêm + `npm install react-redux` : Thư viện react-redux liên kết React với Redux, cho phép các React components đọc dữ liệu từ Redux store và gửi các action tới store để cập nhật dữ liệu.

    + https://longnv.name.vn/su-dung-react/su-dung-redux-trong-react




