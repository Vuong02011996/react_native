import {
    Button,
    Platform,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import React, { Component } from 'react';

// Using Button component
// Pressing the button will call the "onPress" function.

function ButtonTest() {
    return (
        <Button
            onPress={() => {
                alert('You tapped the button!');
            }}
            title="Press Me"
        />
    );
}

// Touchables
// If the basic button doesn't look right for your app, you can build your own button using any of the "Touchable",
// components provided by React Native

// Which "Touchable" component you use will depend on what kind of feedback you want to provide:
// TouchableHighlight: the view's background will be darkened when the user presses down on the button
// TouchableNativeFeedback: on Android to display ink surface reaction ripples that response to the use's touch.
// TouchableOpacity: can be used to provide feedback by reducing the opacity of the button
// TouchableWithoutFeedback: If you need to handle a tap gesture but you don't want any feedback to be displayed.
// onPress:Function chỉ gọi khi press và nhất tay lên.
// Using onLongPress props of any of the "Touchable": để gọi ngay function này sau một khoảng thời gian chạm
class Touchables extends Component {
    _onPressButton() {
        alert('You tapped the button!');
    }

    _onLongPressButton() {
        alert('You long-pressed the button!');
    }

    render() {
        return (
            <View style={styles.container}>
                {/* TouchableHighlight */}
                <TouchableHighlight
                    onPress={this._onPressButton}
                    underlayColor="white"
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            TouchableHighlight
                        </Text>
                    </View>
                </TouchableHighlight>

                {/*TouchableOpacity  */}
                <TouchableOpacity onPress={this._onPressButton}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableOpacity</Text>
                    </View>
                </TouchableOpacity>

                {/* TouchableNativeFeedback */}
                <TouchableNativeFeedback
                    onPress={this._onPressButton}
                    background={
                        Platform.OS === 'android'
                            ? TouchableNativeFeedback.SelectableBackground()
                            : ''
                    }
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            TouchableNativeFeedback{' '}
                            {Platform.OS !== 'android' ? '(Android only)' : ''}
                        </Text>
                    </View>
                </TouchableNativeFeedback>

                {/* TouchableWithoutFeedback */}
                <TouchableWithoutFeedback onPress={this._onPressButton}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            TouchableWithoutFeedback
                        </Text>
                    </View>
                </TouchableWithoutFeedback>

                {/* Using onLongPress */}
                <TouchableHighlight
                    onPress={this._onPressButton}
                    onLongPress={this._onLongPressButton}
                    underlayColor="white"
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            Touchable with Long Press
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        alignItems: 'center',
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3',
    },
    buttonText: {
        textAlign: 'center',
        padding: 20,
        color: 'white',
    },
});

const HandlingTouches = () => {
    return <Touchables />;
};

export default HandlingTouches;
