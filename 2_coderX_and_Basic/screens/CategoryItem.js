import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import * as React from 'react';

export default function CategoryItem({ route, navigation }) {
    const [menuItemList, setMenuItemList] = React.useState([]);

    const { itemId, title } = route.params;
    React.useEffect(() => {
        if (route.params?.title) {
            navigation.setOptions({ title: title });
        }
    }, [route.params?.title]);

    React.useEffect(() => {
        // Use `setOptions` to update the button that we previously specified
        // Now the button includes an `onPress` handler to update the count
        navigation.setOptions({
            headerRight: () => (
                <Button
                    onPress={() => setMenuItemList((menuItemList) => c + 1)}
                    title="Thêm"
                />
            ),
        });
    }, [navigation]);

    const RenderInput = () => {
        const [text, setText] = React.useState('');
        const [price, setPrice] = React.useState('');
        const [quanity, setQuantity] = React.useState('');
        return (
            <View style={styles.container}>
                <View>
                    <Text>Menu</Text>
                    <TextInput
                        style={[styles.textInput, styles.textInputMenu]}
                        placeholder="Nhập..."
                        defaultValue={text}
                        autoFocus={true}
                        onChangeText={(newText) => {
                            setText(newText);
                        }}
                    />
                </View>
                <View>
                    <Text>Giá</Text>
                    <TextInput
                        style={[styles.textInput, styles.textInputPrice]}
                        placeholder="Nhập..."
                        keyboardType="numeric"
                        value={price}
                        // blurOnSubmit={false}
                        autoFocus={false}
                        // onSubmitEditing={() => price.focus()}
                        onChange={(newPrice) => {
                            setPrice(newPrice);
                        }}
                    >
                        {/* <Text style={{ alignSelf: 'flex-end' }}>K</Text> */}
                    </TextInput>
                </View>

                <View>
                    <Text>Số lượng</Text>
                    <TextInput
                        style={[styles.textInput, styles.textInputQuantity]}
                        placeholder="Nhập..."
                        keyboardType="numeric"
                        value={quanity}
                        onChangeText={(newQuantity) => {
                            setQuantity(newQuantity);
                        }}
                    />
                </View>
            </View>
        );
    };

    return <RenderInput />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
    textInput: {
        backgroundColor: '#ccc',
        marginRight: 4,
        fontSize: 18,
        paddingVertical: 8,
        borderWidth: 1,
    },
    textInputMenu: {
        minWidth: 100,
    },
    textInputPrice: {
        minWidth: 70,
    },
    textInputQuantity: {
        minWidth: 20,
    },
});
