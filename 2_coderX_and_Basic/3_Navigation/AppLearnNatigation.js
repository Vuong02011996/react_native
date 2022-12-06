import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// we need to wrap the whole app in NavigationContainer
// This component must wrap all navigators structure
// Usually you'd do this in your entry file, such as index.js or App.js

//  the most common navigator, createNativeStackNavigator

// Creating a native stack navigator
// createNativeStackNavigator is a function that returns an object containing 2 properties:
// Screen and Navigator: both of them are React component used for configuring the navigator.
// The Navigator should contain Screen elements as its children to define the configuration for routes.

// Screen: The only required configuration for a screen is the name and component props
// Other options available in here: https://reactnavigation.org/docs/native-stack-navigator/
// The component prop accepts component, not a render function. Don't pass component={() => <HomeScreen />}

// Change  initial route for the stack by initialRouteName="Home". But press r to reload app.
// React Native's Fast Refresh won't update changes from initialRouteName

// Each screen in the navigator can specify some options for the navigator, such as the title to render in the header
// We can pass an options prop to Stack.Screen, and for common options, we can pass screenOptions to Stack.Navigator

// Passing additional props
// Sometimes we might want to pass additional props to a screen
// We can do that with 2 approaches:
// 1. Use React context and wrap the navigator with a context provider to pass data to the screens (recommended)
// 2. Use a render callback for the screen instead of specifying a component prop
// By default, React Navigation applies optimizations to screen components to prevent unnecessary renders.
// Using a render callback removes those optimizations
// you'll need to ensure that you use React.memo or React.PureComponent for your screen components to avoid performance issues.

import { HomeScreen } from './1_Moving_between_screens';

function DetailsScreen() {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Text>Details Screen</Text>
        </View>
    );
}

const Stack = createNativeStackNavigator();

const AppLearnNatigation = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                {/* Rest of your app code */}
                <Stack.Navigator initialRouteName="HomeScreen">
                    <Stack.Screen
                        name="HomeScreen"
                        component={HomeScreen}
                        options={{ title: 'Overview' }}
                    />
                    <Stack.Screen name="Details" component={DetailsScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default AppLearnNatigation;

const styles = StyleSheet.create({});
