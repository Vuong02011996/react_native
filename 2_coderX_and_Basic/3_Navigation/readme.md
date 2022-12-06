# Navigation

-   To creating and app with multiple screens and transitioning between them.(routing)
-   We need to do 3 things:
    -   Set up a `<NavigationContainer>` from `@react-navigation/native`
    -   Create a navigator:
        -   `createStackNavigator` from `@react-navigation/stack`
        -   `createBottomTabNavigator` from `@react-navigation/bottom-tabs`
        -   `createDrawerNavigator` from `@react-navigation/drawer`
    -   Define the screens in our app

# Two library to navigation app

-   When adding React Native to an existing native app, it may be worth considering
    -   https://wix.github.io/react-native-navigation/docs/before-you-start/
        -   `import { Navigation } from "react-native-navigation"`

*   https://reactnavigation.org/docs/hello-react-navigation

    -   `import { createNativeStackNavigator } from '@react-navigation/native-stack';`

*   This Using @react-navigation/native @react-navigation/native-stack

# Pre-requisites

https://reactnavigation.org/docs/getting-started

-   React Native Express (Sections 1 to 4)
-   Main Concepts of React
-   React Hooks
-   React Context (Advanced)

# Install

-   `npm install @react-navigation/native @react-navigation/native-stack`
-   `expo install react-native-screens react-native-safe-area-context`
