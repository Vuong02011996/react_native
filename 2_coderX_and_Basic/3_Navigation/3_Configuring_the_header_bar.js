import { StyleSheet, Text, View, Button, Image } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// A Screen component accepts options prop which is either an object or a function that returns an object,
//  that contains various configuration options

// Updating options with setOptions: using navigation.setOptions({ title: 'Updated!' })}

// Adjusting header styles: There are three key properties to use
// headerStyle:  a style object that will be applied to the View that wraps the header
// headerTintColor: the back button and title both use this property as their color.
// headerTitleStyle: if we want to customize the fontFamily, fontWeight and other Text style properties for the title

// Sharing common options across screens: using screenOptions on Stack.Navigator, applied for all screens.
// Chú ý cách ghi đè style trong option sẽ ghi đè cả object headerTitleStyle luôn chớ không ghi đè 1 thuộc tính fontSize

// Replacing the title with a custom component: using headerTitle instead of title.
function LogoTitle() {
    return (
        <Image
            style={{ width: 50, height: 50 }}
            source={{ uri: 'https://reactjs.org/logo-og.png' }}
        />
    );
}

function HomeScreen({ navigation }) {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Text>Home Screen</Text>
            <Button
                title="Update the title"
                onPress={() => navigation.setOptions({ title: 'Updated!' })}
            />
        </View>
    );
}

const Stack = createNativeStackNavigator();

const StackScreen = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#ccc',
                headerTitleStyle: {
                    fontSize: 50,
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen
                name="Home New"
                component={HomeScreen}
                options={{
                    title: 'My home',
                    headerStyle: {
                        backgroundColor: '#f45',
                    },
                    // headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}

                // Using params in the title
                // options={({ route, navigation }) => {
                //     console.log(route);
                //     // console.log(navigation);
                //     // return { title: route.name };
                // }}
                // options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
            />
        </Stack.Navigator>
    );
};

export default StackScreen;

const styles = StyleSheet.create({});
