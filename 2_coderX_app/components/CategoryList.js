import React from 'react'
import {
    Image,
    Text,
    View,
    StyleSheet
} from 'react-native'

import image1 from '../images/floral.png'



// CSS trong react
// C1: dùng props style của component
// C2: react native cung cấp một class là StyleSheet để CSS.
// 



export default function CategoryList(props)
{
    return (
        <View style={styles.container}>
            <Text style={styles.title}>CategoryItem</Text>
            {/* <Image style={{height: 64, width:64}} source={image1}></Image> */}
            <Image style={styles.categoryImage} source={image1}></Image>
        </View>
    )
}

// Khai báo object styles để CSS
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 4,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: {width: 0, height: 0}
    },
    categoryImage: {
        height: 64,
        width: 64
    },
    title: {
        textTransform: "uppercase",
        marginBottom: 8
    }
})
