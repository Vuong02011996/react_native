import { StyleSheet, Text, View, Button, Image } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Adding a button to the header
// Using headerLeft and headerRight properties in options.

// Header interaction with its screen component: Using  navigation.setOptions

// Customizing the back button: Using headerBackTitle, style it with headerBackTitleStyle

function HomeScreen({ navigation }) {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        // Use `setOptions` to update the button that we previously specified
        // Now the button includes an `onPress` handler to update the count
        navigation.setOptions({
            headerRight: () => (
                <Button
                    onPress={() => setCount((c) => c + 1)}
                    title="Update count"
                />
            ),
        });
    }, [navigation]);

    return <Text>Count: {count}</Text>;
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
                    headerLeft: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title="Info"
                            color="#fff"
                        />
                    ),
                    headerRight: () => <Button title="Update count" />,
                }}
            />
        </Stack.Navigator>
    );
};

export default StackScreen;

const styles = StyleSheet.create({});
