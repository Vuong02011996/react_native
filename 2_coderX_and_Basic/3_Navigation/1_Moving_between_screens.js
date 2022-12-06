import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//  we'll use the navigation prop that is passed down to our screen components
// navigation - the navigation prop is passed in to every screen component (definition) in the native stack navigator
// navigate('Details') - we call the navigate function with the name of the route that we'd like to move the user to.
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

export default Moving_between_screens;

const styles = StyleSheet.create({});
