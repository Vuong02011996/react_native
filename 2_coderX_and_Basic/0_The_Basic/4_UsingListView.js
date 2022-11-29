import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

// To render list, you'll want to use either FlatList or SectionList.
// The FlatList components displays a scrolling list of changing.
// FlatList works well for long lists of data, where the number of items data might change over time.
// Unlike the more generic ScrollView, the FlatList only renders elements that currently showing on the screen.
// not all the elements at once.

// The FlatList component requires two props: data and renderItem
// data is the source of infomation for the list.
// renderItem take one item from the source and returns a formatted component to render.

const UsingListView = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={[
                    { key: 'Devin' },
                    { key: 'Dan' },
                    { key: 'Dominic' },
                    { key: 'Jackson' },
                    { key: 'James' },
                    { key: 'Joel' },
                    { key: 'John' },
                    { key: 'Jillian' },
                    { key: 'Jimmy' },
                    { key: 'Julie' },
                ]}
                renderItem={({ item }) => (
                    <Text style={styles.item}>{item.key}</Text>
                )}
            />
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
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

export default UsingListView;
