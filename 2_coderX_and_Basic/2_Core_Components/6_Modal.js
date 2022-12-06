import { StyleSheet, Text, View, Button, Modal, Pressable } from 'react-native';
import React, { useState } from 'react';

// Modal kết thừa props từ View
// onRequestClose: require on Android when user tabs the hardware back button on Android.

const ModalComponent = ({ isVisible, setIsVisible }) => {
    return (
        <Modal
            visible={isVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.container}>
                <View style={styles.modalView}>
                    <Text style={styles.textModal}>Hello I'm Modal</Text>
                    <ButtonCustom
                        title="CloseModal"
                        isVisible={isVisible}
                        setIsVisible={setIsVisible}
                    />
                </View>
            </View>
        </Modal>
    );
};
const ButtonCustom = ({ title, isVisible, setIsVisible }) => {
    return (
        <View style={styles.button}>
            <Button
                onPress={() => setIsVisible(!isVisible)}
                title={title}
                color="black"
            />
        </View>
    );
};
const ModalTest = () => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <View style={styles.container}>
            <ButtonCustom
                title="ShowModal"
                isVisible={isVisible}
                setIsVisible={setIsVisible}
            />
            <ModalComponent isVisible={isVisible} setIsVisible={setIsVisible} />
        </View>
    );
};

export default ModalTest;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        borderRadius: '50%',
        backgroundColor: 'green',
        width: '50%',
        paddingVertical: 20,
    },
    modalView: {
        flex: 0,
        // flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 1,
    },
    textModal: {
        fontSize: 20,
        color: 'red',
        // margin: 50,
    },
});
