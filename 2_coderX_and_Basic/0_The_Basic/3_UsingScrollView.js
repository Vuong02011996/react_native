import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';

// You can scroll both vertically and horizontally by setting the horizontal property
// If you have a long list of items which cannot fit on the screen, you should use a FlatList instead.
const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 200,
    height: 200,
};

const UsingScrollView = () => {
    return (
        <ScrollView horizontal={true}>
            <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
        </ScrollView>
    );
};

export default UsingScrollView;
