import { Alert, StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

// bao bọc children component và detect từng giai đoạn của quá trình touch

// Props
// onPress: Called immediately when a touch is engaged, before onPressOut and onPress.
// onPressOut: Called when a touch is released.
// onPress: Called after onPressOut.

// Khác với button cái ni có style nên có thể padding và backgroundColor để  tạo button
// style có thể nhận function(có tham số là pressed) hoặc View style.

const onPressFunction = () => {
    // Alert.alert('Press');
    console.log('abc');
};
const PressableTest = () => {
    return (
        <View style={styles.container}>
            <Pressable
                onPress={onPressFunction}
                style={({ pressed }) => [
                    styles.button,
                    {
                        backgroundColor: pressed ? 'blue' : 'white',
                    },
                    // styles.button,
                ]}
            >
                <Text>I'm pressable!</Text>
            </Pressable>
        </View>
    );
};

export default PressableTest;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: '50%',
    },
});
