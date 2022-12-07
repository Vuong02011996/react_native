import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';

export default function CategoryItem({ route, navigation }) {
    const { itemId, title } = route.params;
    React.useEffect(() => {
        if (route.params?.title) {
            navigation.setOptions({ title: title });
        }
    }, [route.params?.title]);

    return (
        <View style={styles.container}>
            <Text>Category Item</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
});
