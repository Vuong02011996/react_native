import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

// Nesting navigators means rendering a navigator inside a screen of another nagigator.
/**When nesting navigators, there are some things to keep in mind:
 * Each navigator keeps its own navigation history: go back to the previous screen inside the nested stack
 * Each navigator has its own options: title option in a screen nested in a child navigator won't affect the title shown in a parent navigator.
 * Each screen in a navigator has its own params​
 *
 */
const Home = () => {
    return (
        <View>
            <Text>Home</Text>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({});
