import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

// With React Native, you style you application using JavaScript.
// All of the core component accept a prop name style.
// prop style: có thể nhận một mảng các object chứa thuộc tính CSS,
// object sau sẽ thuộc tính giống object trước sẽ đè CSS của object viết trước

// The style names and values usually match how CSS works on the web, eccept name are written using camel case.

// As a components grows in complexity. It is often cleaner to use StyleSheet.create

// Flex Dimensions
// Normally you will use flex: 1, which tells a component to fill all available space,
// shared evenly amongst other components with the same parent
const FlexDimensionsBasics = () => {
    return (
        // Try removing the `flex: 1` on the parent View.
        // The parent will not have dimensions(defined size), so the children can't expand.
        // What if you add `height: 300` instead of `flex: 1`?
        <View style={{ height: 300, width: 500 }}>
            <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
            <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
            <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
        </View>
    );
};

// Percentage Dimensions
// if you want to fill a certain portion of the screen, but you don't want to use the flex layout,
// You can use percentage values.
// Similar to flex dimensions, percentage dimensions require parent with a defined size.

const PercentageDimensionsBasics = () => {
    // Try removing the `height: '100%'` on the parent View.
    // The parent will not have dimensions, so the children can't expand.
    return (
        <View style={{ height: '100%', width: '100%' }}>
            <View
                style={{
                    height: '15%',
                    backgroundColor: 'powderblue',
                }}
            />
            <View
                style={{
                    width: '66%',
                    height: '35%',
                    backgroundColor: 'skyblue',
                }}
            />
            <View
                style={{
                    width: '33%',
                    height: '50%',
                    backgroundColor: 'steelblue',
                }}
            />
        </View>
    );
};

const StyleBasic = () => {
    return <PercentageDimensionsBasics />;
};

export default StyleBasic;

const styles = StyleSheet.create({});
