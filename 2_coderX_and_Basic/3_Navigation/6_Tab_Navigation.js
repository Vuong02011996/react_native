import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Using createBottomTabNavigator

/**
 * Customizing the appearance
 * 1. There are some properties that are set when you initialize the tab navigator: screenOptions
 * 2. Others that can be customized per-screen in options
 * tabBarIcon is a function that is given the focused state, color, and size params
 *
 * Add badges to icons: You can use the tabBarBadge option to do it
 *
 * Jumping between tabs: Using navigation.navigate('Settings') the same Stack navigation
 *
 * A stack navigator for each tab:
 *
 * @returns
 */

function HomeScreen({ navigation }) {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Text>Home!</Text>
            <Button
                title="Go to Settings"
                onPress={() => navigation.navigate('Settings')}
            />
        </View>
    );
}

function SettingsScreen() {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Text>Settings!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

function TabNavigationTest() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'ios-list' : 'ios-list-outline';
                    }

                    // You can return any component that you like here!
                    return (
                        <Ionicons name={iconName} size={size} color={color} />
                    );
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarBadge: 5,
                    tabBarBadgeStyle: {
                        fontSize: 10,
                    },
                }}
            />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
}

export default TabNavigationTest;

const styles = StyleSheet.create({});
