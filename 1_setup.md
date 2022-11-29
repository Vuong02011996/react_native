# Setup environment to run react-native app on ubuntu 
## USING Expo Go 
1. Node js
2. VS code
3. JDK
    + Java is used to build native Android apps. 
    + This means that Java Development Kit (JDK) is required for working with projects in React Native. 
4. Giả lập Android Studio 
    + Cách 1: download về giải nén: `https://developer.android.com/studio/index.html`

    + Cách 2: https://linuxhint.com/install-android-studio-ubuntu22-04/
    ```
    sudo add-apt-repository ppa:maarten-fonville/android-studio
    sudo apt update
    sudo apt install android-studio -y
    ```

5. Config Android Studio 
    + Cài đặt SDK cho Android Studio
    + Tạo máy ảo trên Android Studio
    + `https://itzone.com.vn/vi/article/huong-dan-run-project-react-native-tren-ubuntu-voi-expo-android-studio/`

6. Tạo project với Expo CLI
+ `sudo npm install --global expo-cli`: chú ý chỗ này dùng sudo mới được.
+ `expo init my-app`
+ `cd my-app`
+ `expo start`

## Using React Native CLI.
+ https://reactnative.dev/docs/environment-setup
```
export ANDROID_SDK_ROOT=$HOME/Android/sdk
export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
```