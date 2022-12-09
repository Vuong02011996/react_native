import React from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Alert,
} from 'react-native';

import image1 from '../images/bida_image.jpg';

// CSS trong react
// C1: dùng props style của component
// C2: react native cung cấp một class là StyleSheet để CSS.
//

export default function CategoryList(props) {
    const { category, onPress } = props;
    // console.log('props: ', props);
    let curTime = new Date().toLocaleString();
    // let curTime = new Date();
    // console.log(curTime);

    return (
        <TouchableOpacity activeOpacity={0.3} onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.title}>{category.name}</Text>
                <Text>{curTime}</Text>
                {/* <Image style={{height: 64, width:64}} source={image1}></Image> */}
                {/* <Image style={styles.categoryImage} source={image1}></Image> */}
            </View>
        </TouchableOpacity>
    );
}

// Khai báo object styles để CSS
const styles = StyleSheet.create({
    container: {
        // alignItems: 'flex-end',
        padding: 48,
        borderRadius: 4,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        marginBottom: 16,
    },
    categoryImage: {
        height: 64,
        width: 64,
    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '600',
    },
});
