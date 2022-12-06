import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React from 'react';

// Inherits View Props.

const ActivityIndicatorTest = () => {
    return (
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator />
            <ActivityIndicator size="small" color="red" />
            <ActivityIndicator size="large" color="blue" />
        </View>
    );
};

export default ActivityIndicatorTest;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
});
