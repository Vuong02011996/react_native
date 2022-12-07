// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from './screens/Categories';
import CategoryItem from './screens/CategoryItem';

function HomeScreen() {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Text>Home Screen</Text>
        </View>
    );
}

const Stack = createNativeStackNavigator();

function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Categories">
                {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
                {/* Mỗi screen được định nghĩa ở đây mặc định sẽ có một props là navigation  */}
                <Stack.Screen
                    name="Categories"
                    component={Categories}
                    options={{
                        title: 'BIDA VUONG',
                        headerStyle: {
                            backgroundColor: '#f45',
                        },
                        // headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />
                <Stack.Screen name="CategoryItem" component={CategoryItem} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;
