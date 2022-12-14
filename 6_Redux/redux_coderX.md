# Giới thiệu
+ Một màn hình là một component, ta quy đổi các thành phần nhỏ trên màn hình thành dữ liệu, mỗi thành phần là một State. (Ta có thể chia màn hình là component cha các thành phần nhỏ có thể là một state hoặc một component con và trong component con này có các State riêng) => một component có rất nhiều state.
+ Khi phân tích được UI thành các thành phần dữ liệu là ta đang thiết kế Store trong redux.
+ Redux là `State Management tool`, 
    + `State = Data`: là các object chứa dữ liệu trong JS.
    + `Management`: thay đổi State như thế nào, thêm bớt dữ liệu ntn là cv của `redux`.

+ Trong ứng dụng React + Redux: ta sẽ tổ chức data , thay đổi data và map với UI bằng một cách nào đó sao cho khi data thay đổi thì UI sẽ tự động cập nhật lại dữ liệu.

# Manage State trong redux
+ Trong JS thuần khi ta có một hành động trên UI để thay đổi data(state) thì ta thường viết logic ngay trong phần code UI (gán cho sự kiện của element chứa hành động một callback và viết logic trong callback đó) => viết quá nhiều logic trong UI.

# Nội dụng bài học
## Cách xây dựng và sử dụng redux với ví dụ đơn giản
## Cách dùng combine redux
