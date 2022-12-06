# Setup environment to run react-native app on ubuntu

## USING Expo Go

1. Node js
2. VS code
3. JDK
    - Java is used to build native Android apps.
    - This means that Java Development Kit (JDK) is required for working with projects in React Native.
4. Giả lập Android Studio

    - Cách 1: download về giải nén: `https://developer.android.com/studio/index.html`

    - Cách 2: https://linuxhint.com/install-android-studio-ubuntu22-04/

    ```
    sudo add-apt-repository ppa:maarten-fonville/android-studio
    sudo apt update
    sudo apt install android-studio -y
    ```

5. Config Android Studio

    - Cài đặt SDK cho Android Studio
    - Tạo máy ảo trên Android Studio
    - `https://itzone.com.vn/vi/article/huong-dan-run-project-react-native-tren-ubuntu-voi-expo-android-studio/`

6. Tạo project với Expo CLI

-   `sudo npm install --global expo-cli`: chú ý chỗ này dùng sudo mới được.
-   `expo init my-app`
-   `cd my-app`
-   `expo start`

## Using React Native CLI.

-   https://reactnative.dev/docs/environment-setup

```
export ANDROID_SDK_ROOT=$HOME/Android/sdk
export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
```

# Thông tin về React_Native

-   JavaScript both ios(swift, objective-c) + android(Java)
-   Ngoài React Native của JS còn có các Framework sau có thể build app trên nhiều nền tảng(cross-platform) như: Xamarin(C#), Flutter(Dart), ngôn ngữ Kotlin.

-   Có ba cách build app react-native
    -   Expo CLI(tool setup - fast easy có packgage, api có sẵn chỉ cần import vào sử dụng)
    -   React Native CLI(command line - dùng cho dự án lớn)
    -   Expo Snack

# Có 3 cách để xem giao diện app di động sau khi code

-   Trực tiếp trên browser(Code online)

    -   Tạo tài khoản expo: Vương02011996 pass 02011996
    -   Vào https://snack.expo.dev/ (tool/snack)
    -   Phải đợi để tới lượt mình mới sử dụng được máy ảo.
    -   https://www.youtube.com/watch?v=YESKWUQHDDc&list=PLv6GftO355AtasIvXXJNXIs_H6v9KSUXC&index=2

-   Cài đặt sử dụng máy di động ảo trên máy tính

    -   Dùng với visual studio code
    -   Vào trang chủ react-native setup environment -> https://reactnative.dev/docs/environment-setup tạo project với `npx create-expo-app AwesomeProject`, check expo --version ,
    -   Cách 2:
        -   (`sudo npm i -g expo-cli` sudo mới không lỗi)
        -   `expo init react_native_app`

    ```
    - cd react_native_app
    - npm run android
    - npm run ios # you need to use macOS to build the iOS project - use the Expo app if you need to do iOS development without a Mac
    - npm run web
    ```

    -   Cài máy ảo Iphone và Android
        -   Trên MacOS đã có XCode(liver server) xem máy ảo Iphone
        -   Xem máy ảo Android cần Android Studio -> setup.

-   Sử dụng thiết bị di động thật lại có 2 cách
    -   Cách 1: xem trực tiếp trên điện thoại
    -   Cách 2: xem đt trên màn hình PC
        -   Cài airdroid cast trên đt và PC (web/app) rồi kết nối.
        -   Tải Expo Go về máy và xem.

# VS extension

-   ES7+ React/Redux/React-Native snippets
    -   Tạo file code có import , component, stylesheet sẵn vs react-native: rnfs-> enter(react_native_function_style)
