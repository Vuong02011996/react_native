import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';

// <ImageBackground> component which has the same props as <Image>
// add whatever children to it you would like to layer on top of it.

const ImageBackgroundTest = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={{ uri: 'https://reactjs.org/logo-og.png' }}
                resizeMode="cover"
                style={styles.image}
            >
                <Text style={styles.text}>Inside</Text>
            </ImageBackground>
        </View>
    );
};

export default ImageBackgroundTest;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontSize: 30,
        fontWeight: '600',
        backgroundColor: 'white',
        textAlign: 'center',
        marginHorizontal: 20,
        paddingVertical: 20,
    },
});
