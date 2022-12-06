# Some component ít sử dụng

-   `<KeyboardAvoidingView/>`: tự động thay đổi chiều cao, vị trí và bottom padding khi bàn phím hiện lên(`TextInput`)
-   `RefreshControl`: This component is used inside a ScrollView or ListView to add pull to refresh functionality
-   `StatusBar`: điều khiển status bar : thanh bar phía trên cùng màn hình điện thoại hiển thị wifi, pin, time,...
-   `Switch`: Renders a boolean input
-   `VirtualizedList`: gần giống FlatList

# Some component dễ sử dụng:

-   `SafeAreaView`: chỉ chạy trên IOS , để render nội dung trong vùng an toàn của thiết bị.
    Áp dụng padding để tránh cover navigation bars, tab bars, toolbars, and other ancestor views.
    Inherits View Props.
-   `SafeAreaProvider`: import from `react-native-safe-area-context` thay thế cho `SafeAreaView` để bao bọc ngoài `NavigationContainer`, dùng `SafeAreaView` sẽ không nhìn thấy gì cả.
