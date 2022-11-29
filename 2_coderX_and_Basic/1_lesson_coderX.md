+ Tạo project với expo
+ Debug
+ `StyleSheet`
    + contentContainerStyle: style nội dung bên trong thẻ.
+ `ScrollView`
    + Giống như DOM thẻ div thêm overflow = scroll.
    + Dùng ScrollView bao lại tất cả element muốn cuộn.
+ `FlatList`
    + Dùng để render list Item như ul/li của DOM.
    + FlatList có 3 đối số:
        + data: array muốn render.
        + renderItem function: mỗi lần lặp sẽ gọi callback này , đối số callback là từng element của mảng data ở trên. Chú ý dùng destructoring {item} làm đối số cho hàm để lấy đúng item của mảng.
        + keyExtractor: giống key trong map, nhưng chỉ nhận string làm key
    + FlatList đã có tính scroll như ScrollView

+ `Xử lí sự kiện touch`
    + Dùng component TouchableOpacit(chạm vào mờ thêm một chút), bao ngoài những thành phần muỗn touch vào.
    + Dùng thuộc tính activeOpacity để chỉnh độ mờ khi touch vào.
    + Để xử lí xự kiện khi touch thêm props onPress, dùng như onClick trên DOM.
    + https://reactnative.dev/docs/handling-touches

+ `Navigation Stack`
    + Stack: Ấn vào nhảy qua trang mới , bấm back(mũi tên quay về) để quay lại trang trước
    + Install
    + Run example: https://reactnavigation.org/docs/hello-react-navigation
    + Sử dụng:
        + B1: Chuẩn bị các màn hình để di chuyển.
        + B2: Trong file App quản lí các screen tạo Stack Navigator và bỏ các màn hình vào, chú ý màn hình con viết sau màn hình cha. Vì chương trình sẽ hiển thị màn hình nào viết đầu tiên.
        + B3: Khi đó màn hình cha sẽ nhận một prop navigation , dùng prop này để chuyển hướng đến tên màn hình con tương ứng khi onPress.(Tên màn hình phỉa giống vs tên đặt ở file App B2)

+ `Navigation param `
    + Truyền tham số từ màn hình này sang màn hình khác(Stack: cha -> con)
    + Ví dụ title màn hình con.
    + Trong method navigate của prop navigation màn hình cha, ngoài tên màn hình truyền thêm object chứa các param muốn truyền.
    + Sang màn hình con nhận param và xử lí.


+ `Grid Layout` - column -> row
    + Tạo layout nhiều cột trên một hàng.

+ `Networking` - gọi API


+ `Navigation Tab`
    + Ấn vào các tab khác nhau sẽ hiển thị các trang khác nhau.

    
+ Add to cart
+ Expo Snack
+ JSON web token.