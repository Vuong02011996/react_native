import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    FlatList,
    StatusBar,
    TouchableOpacity,
} from 'react-native';

// FlatList
// required: renderItem({ item, index, separators }): Takes an item from data and renders it into the list.
//             data:  Takes an item from data and renders it into the list.
// keyExtractor(item: object, index: number) => string;

// To render multiple columns, use the numColumns prop. Multiple columns can only be rendered with horizontal={false}

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

function FlatListTest() {
    // Ví dụ 1 render List data
    // Chú ý: keyExtractor nhận vào một callback, đối số của callback là item của DATA không cần destructuring
    // renderItem nhận vào một callback, đối số của callback là item của DATA cần destructuring

    const renderItem1 = ({ item }) => {
        console.log(item);
        return (
            <View style={styles.item}>
                <Text style={styles.text}>{item.title}</Text>
            </View>
        );
    };
    const FlatListTest1 = () => {
        return (
            <FlatList
                data={DATA}
                keyExtractor={(item) => {
                    item.id;
                }}
                renderItem={renderItem1}
                contentContainerStyle={styles.container}
                // horizontal={false}
                // numColumns={3}
            />
        );
    };

    // Ví dụ 2 Re-render khi props item thay đổi trong FlatList
    // Khuyến cáo sử dụng extraData={selectedId} to make sure FlatList itself will re-render when the state changes
    // mà không thêm vào cũng không vấn đề chi?
    const [selectedId, setSelectId] = useState(null);

    const renderItem2 = ({ item }) => {
        console.log('Re render Item', item.id);
        const backgroundColor = item.id === selectedId ? '#f9c2ff' : 'red';
        const color = item.id === selectedId ? '#fff' : '#000';
        const fontSize = 20;
        return (
            <TouchableOpacity
                onPress={() => setSelectId(item.id)}
                style={[styles.item, { backgroundColor }]}
            >
                <Text style={[styles.text, { fontSize }, { color }]}>
                    {item.title}
                </Text>
            </TouchableOpacity>
        );
    };
    const FlatListTest2 = () => {
        return (
            <FlatList
                data={DATA}
                keyExtractor={(item) => item.id}
                renderItem={renderItem2}
                contentContainerStyle={styles.container}
                extraData={selectedId}
            />
        );
    };

    return FlatListTest2();
}
console.log('StatusBar.currentHeight: ', StatusBar.currentHeight);

export default FlatListTest;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    item: {
        // padding: 20,
        backgroundColor: 'red',
        paddingVertical: 20,
        marginHorizontal: 20,
        marginVertical: 8,
        borderRadius: 4,
    },
    text: {
        // fontSize: 20,
        textAlign: 'center',
    },
});
