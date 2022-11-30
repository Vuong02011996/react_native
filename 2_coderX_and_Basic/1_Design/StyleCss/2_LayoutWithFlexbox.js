import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

// You will normally use a combination of flexDirection, alignItems, and justifyContent to achieve the right layout.

// Flexbox works the same way React Native as it does on the web with a few exception.
// The defaults are different:
/**
 * flexDirection: defaulting column instead of row.
 * alignContent: defaulting flex-start instead of stretch
 * flexShink: defaulting 0 instead of 1
 * the flex parameter only supporting a single number.
 */
const Flex = () => {
    return (
        <View style={[styles.container]}>
            <View
                style={{ height: '20%', width: '50%', backgroundColor: 'red' }}
            />
            <View
                style={{
                    height: '40%',
                    width: '60%',
                    backgroundColor: 'darkorange',
                }}
            />
            <View
                style={{
                    height: '40%',
                    width: '80%',
                    backgroundColor: 'green',
                }}
            />
            {/* 1+2+3 = 6 => 1/6;2/6;3/6 */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexGrow: 1,
        padding: 20,
        width: '20%',
        height: '50%',
        alignItems: 'flex-start',
    },
});

// 1. flexDirection: ('row', 'row-reverse', 'column'-default, 'column-reverse') This is also referred to as the main axis.
// 2. direction(LayoutDirection): ('inherit', 'ltr'-default, 'rtl')
// 3. justifyContent : aligns children in the main direction.
// For example, if children are flowing vertically, justifyContent controls how they align vertically.
// ('flex-start'-default, 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly')

// 4. alignItems: aligns children in the cross direction.
// ('flex-start', 'flex-end', 'center', 'stretch'-default, 'baseline')

// 5. alignSelf: controls how a child aligns in the cross direction, overriding the alignItems of the parent.
// ('auto'-default, 'flex-start', 'flex-end', 'center', 'stretch', 'baseline')

// .... https://reactnative.dev/docs/flexbox

const LayoutWithFlexbox = Flex;

export default LayoutWithFlexbox;
