import { View, Text } from 'react-native';
import React from 'react';
import ReactFundamental from './1_ReactFundamental';
import HandleTextInput from './2_HandleTextInput';
import UsingScrollView from './3_UsingScrollView';
// import UsingListView from './4_UsingListView';
import Networking from './5_Networking';
import { Platform } from 'react-native';

console.log('Version: ', Platform.OS);
console.log('Version: ', Platform.Version);

const AppLearnBasic = () => {
    return <Networking />;
};

export default AppLearnBasic;
