import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    FlatList,
    Alert,
    Pressable,
} from 'react-native';
import * as React from 'react';

export default function CategoryItem({ route, navigation }) {
    const onPressXoaMon = () => {
        Alert.alert('Xoa');
    };

    const RenderMon = ({ props }) => {
        const showText = props.showText;
        const [text, setText] = React.useState('');
        const [price, setPrice] = React.useState('');
        const [quanity, setQuantity] = React.useState('');
        const [sumMoney, setSumMoney] = React.useState(price);
        return (
            <View style={styles.container}>
                <View>
                    <Text style={{ display: showText }}>Mon</Text>
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
                    <Text style={{ display: showText }}>Giá</Text>
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
                    <Text style={{ display: showText }}>Số lượng</Text>
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
                <View>
                    <Text style={{ display: showText }}>Thành tiền</Text>
                    <TextInput
                        style={[styles.textInput, styles.textInputQuantity]}
                        placeholder="0"
                        keyboardType="numeric"
                        value={sumMoney}
                        onChangeText={(newQuantity) => {
                            setSumMoney(newQuantity);
                        }}
                    />
                </View>

                <Pressable
                    onPress={onPressXoaMon}
                    style={({ pressed }) => [
                        styles.buttonXoa,
                        {
                            backgroundColor: pressed ? 'blue' : 'red',
                        },
                    ]}
                >
                    <Text style={{ alignItems: 'center', fontSize: '16' }}>
                        Xóa
                    </Text>
                </Pressable>
            </View>
        );
    };
    console.log('re-render');
    const [menuItemList, setMenuItemList] = React.useState([
        <RenderMon props={{ showText: 'flex' }} />,
    ]);

    // Update lại title khi click vào từng bàn
    const { itemId, title } = route.params;
    React.useEffect(() => {
        if (route.params?.title) {
            navigation.setOptions({ title: title });
        }
    }, [route.params?.title]);

    // Khi click vào thêm món sẽ add thêm một RenderMon vào mảng

    React.useEffect(() => {
        // Use `setOptions` to update the button that we previously specified
        // Now the button includes an `onPress` handler to update the count
        navigation.setOptions({
            headerRight: () => (
                <Button
                    onPress={() =>
                        setMenuItemList((menuItemList) => {
                            const newMenuItemList = [...menuItemList];
                            newMenuItemList.push(
                                <RenderMon props={{ showText: 'none' }} />,
                            );
                            return newMenuItemList;
                        })
                    }
                    title="Thêm"
                />
            ),
        });
    }, [navigation]);
    console.log('menuItemList', menuItemList);
    return (
        <View>
            <FlatList
                data={menuItemList}
                keyExtractor={(item, index) => `${index}`}
                renderItem={({ item }) => {
                    console.log('item', item);
                    return item;
                }}
            />
        </View>
    );
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
        minWidth: 50,
    },
    buttonXoa: {
        // height: 20,
        // width: 20,
        backgroundColor: 'blue',
        borderRadius: '10%',
    },
});
