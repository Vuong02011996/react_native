import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import CategoryList from '../components/CategoryList';

export default function Categories({ navigation }) {
    const state = {
        categories: [
            { id: 1, name: 'Bàn 1' },
            { id: 2, name: 'Bàn 2' },
            { id: 3, name: 'Bàn 3' },
            { id: 4, name: 'Bàn 4' },
        ],
    };

    const categories = state.categories;

    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                renderItem={({ item }) => {
                    return (
                        <CategoryList
                            category={item}
                            onPress={() => {
                                navigation.navigate('CategoryItem', {
                                    itemId: item.id,
                                    title: item.name,
                                });
                            }}
                        />
                    );
                }}
                keyExtractor={(item) => `${item.id}`}
                contentContainerStyle={{ paddingLeft: 32, paddingRight: 32 }}
            />
            <StatusBar style="auto" />
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
