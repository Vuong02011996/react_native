import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';

// TextInput is a Core Component that allows the user to enter text. It has an
// onChangeText prop that takes a function to be called every time the text changed.
// onSubmitEditing prop that takes a function to be called when the text is submitted.

export default function HandleTextInput() {
    const [text, setText] = useState('');

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Type here..."
                defaultValue={text}
                onChangeText={(newText) => {
                    setText(newText);
                }}

                // Không dùng được onChange and event trên mobile
                // onChange={(e) => {
                //     setText(e.target.value);
                // }}
            />
            <Text style={{ padding: 10, fontSize: 42 }}>
                {text
                    .split(' ')
                    .map((word) => word && '🍕')
                    .join(' ')}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
