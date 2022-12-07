import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

/**We can pass data to routes when we nagigate to them.
 * There are two pieces to this:
 *
 * 1. Pass params to a route by putting them in an object as a second parameter to
 * the navigation.navigate function: navigation.navigate('RouteName', {params go here })
 *
 * 2. Read the params in your screen component: route.params
 */

// Updating params: Using navigation.setParams method
// Initial params: Using on Stack.Screen
// Passing params to a previous screen: You can pass the params with navigate to pass the data back
// Passing params to nested navigators: See Nesting navigators for more details on nesting
// Params should contain the minimal data required to show a screen, nothing more

function HomeScreen({ navigation, route }) {
    // chạy một lần đầu tiên và chỉ chạy lại khi render lại dữ liệu thấy route.params?.ParamToPreviousScreen thay đổi
    React.useEffect(() => {
        if (route.params?.ParamToPreviousScreen) {
            console.log(
                'Param to previous screen: ',
                route.params.ParamToPreviousScreen,
            );
        }
    }, [route.params?.ParamToPreviousScreen]);

    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Text>Home Screen</Text>
            <Button
                title="Go to Detail"
                onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate('Details', {
                        itemId: 1,
                        otherParam: 'anything you want to here',
                    });
                }}
            />
        </View>
    );
}

function DetailsScreen({ route, navigation }) {
    // console.log(route.params);
    /* 2. Get the param */
    const { itemId, otherParam, initialParams } = route.params;
    console.log('initialParams: ', initialParams);
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Text>Details Screen</Text>
            {/* stringify: convert string JS to JSON */}
            <Text> itemID: {JSON.stringify(itemId)}</Text>
            <Text> otherParam: {JSON.stringify(otherParam)}</Text>
            <Button
                title="Go to Detail ... again"
                onPress={() => {
                    navigation.push('Details');
                    // navigation.navigate('Details'); Do nothing
                }}
            />
            <Button
                title="Go to Home"
                onPress={() =>
                    navigation.navigate('HomeScreen', {
                        ParamToPreviousScreen: 'ParamToPreviousScreen',
                    })
                }
            />
        </View>
    );
}

export { HomeScreen, DetailsScreen };

const styles = StyleSheet.create({});
