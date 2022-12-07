import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

//  we'll use the navigation prop that is passed down to our screen components
// navigation - the navigation prop is passed in to every screen component (definition) in the native stack navigator
// navigate('Details') - we call the navigate function with the name of the route that we'd like to move the user to.
// navigation.navigate function: có thể nhận object với các tham số bên trong object hoặc từng tham số cụ thể
function HomeScreen({ navigation }) {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Text>Home Screen</Text>
            <Button
                title="Go to Detail"
                onPress={() => {
                    navigation.navigate('Details');
                }}
            />
        </View>
    );
}

// Navigate to a route multiple times
// The navigate function roughly means "go to this screen", and if  you are already on that screen it would do nothing
// Let's suppose that we actually want to add another detail screen.(with another param). We can change nagitate to push function.
function DetailsScreen({ navigation }) {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Text>Details Screen</Text>
            <Button
                title="Go to Detail ... again"
                onPress={() => {
                    navigation.push('Details');
                    // navigation.navigate('Details'); Do nothing
                }}
            />
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('HomeScreen')}
            />
            <Button title="Go back" onPress={() => navigation.goBack()} />
            <Button
                title="Go back to first screen in stack"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
}

// Going back: 4 way
// 1. The header provided by the native stack navigator will automatically include a back button
// 2. use navigation.goBack() - when it is possible to go back from the active screen
// 3. we know that we want to go back to Home so we can use navigate('Home') - not push
// 4. navigation.popToTop(), which goes back to the first screen in the stack.

export { HomeScreen, DetailsScreen };

const styles = StyleSheet.create({});
