import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import StyleBasic from './StyleCss/1_StyleBasic';
import LayoutWithFlexbox from './StyleCss/2_LayoutWithFlexbox';
import ImageStyle from './StyleCss/3_Image';
import HandlingTouches from './Interact/1_HandlingTouches';
import Animation from './Interact/2_Animation';

const AppLearnDesign = () => {
    return (
        <View style={styles.container}>
            <Animation />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default AppLearnDesign;
