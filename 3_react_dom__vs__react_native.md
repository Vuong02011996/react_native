# React DOM(web) vs React Native(mobile)

## Giống:

-   Function component
-   Props
-   State
-   JSX
-   Lifecycle
-   Context API
-   Hook
-   ...

## Khác

-   RN không sử dụng react element như: <p>, <div>, <img>, ..
-   Thay vào đó sử dụng <Text>, <View>, <Image>, ..

-   RN không có các DOM objects như `window`, `document`, nên không có get element by `id`, `class` ,.. Không có id, class luôn.
-   React DOM không có các device API như `Dimension`, `Vibration`, ...

-   RN không có `LocalStorage`, `sessionStorage`, `cookies`, ...
-   Thay vào đó có `AsyncStorage`.

-   React DOM có thể yêu cầu file .css
-   React Native sử dụng syntax giống CSS nhưng không phải CSS.Không có `psedo element`, `psedo class`.

-   React DOM layout mặc định theo từng thẻ: `div - block, a - inline`, ...
-   RN có layout mặc định là `flex, column direction`.(vì mobile nhỏ chỉ muốn một cột)

-   `Navigation`: Web dùng thẻ `a`, `href`
-   Muốn nhảy sang trang này trang kia(màn hình) thì phải gọi api (Browser thay đổi theo URL). Sử dụng các kiểu `navigation` như `Stack`, `Tabs`,

-   RN có các `sensor` API như: `Geolocation`(lấy vị trí), `Gyroscope`, `Accelerometer`(gia tốc), `Device motion`, ..
-   Đơn vị khác DOM pixel.

# Different other(CSS, event)

```
// Không dùng được onChange and event trên mobile
// onChange={(e) => {
//     setText(e.target.value);
// }}
```

-   alignItems: 'stretch'-default
-   justifyContent: 'flex-start'-default

-   pressed in mobile <=> clicked in DOM

# Các thư mục trong src

-   `actions`:
-   `api`:
-   `app`:
-   `components`:
-   `constants`:
-   `navigation`: chứa xử lý sự kiện di chuyển màn hình và định nghĩa các const cho các route màn hình
-   `network`:
-   `reducers`:
-   `store`:
-   `views`: module chứa toàn bộ view đã được custom, hiển thị giao diện thông qua state của store.

# News base react native

## UI components library - react-native

-   `ImageBackground`
-   `Platform` : deviceType: Platform.OS === 'ios' ? 1 : 0,
-   `createAction`: redux-api-middleware
-   `MaterialIndicator`: react-native-indicators
-   `getDeviceInfo` - react-native-device-info
-   `SplashScreen.hide()` - react-native-splash-screen - when token null
    -   Màn hình khởi động ứng dụng.

## Flow Data library

-   `useDispatch` - redux

## Other

-   `token` - web json token eyJhbGciOiJSUzI1NiIsImtpZCI6IkYyMjIyODg1QjczNTBBRDZCNDI5M0I2OEVBNjYwQkM3IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2Njg2Njg1NzAsImV4cCI6MTcwM...`

-   `postDeviceToken`

# Questions

-   UI components library vs Flow Data library?
