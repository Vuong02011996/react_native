import React, { useRef, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';

// React Native provides hai hệ thống animation bổ sung cho nhau:
// Animated: control of specific values
// LayoutAnimation: for animated global layout

// Animated focuses on declarative relationships between inputs and outputs,
// start/stop methods to control time-based animation execution

const FadeInView = (props) => {
    //  Using userRef to re-rendering fadeAnim không phải set lại giá trị khởi tạo mà lấy giá trị trước đó.
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
    console.log('fadeAnim: ', fadeAnim);

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 10000,
        }).start();
    }, [fadeAnim]);

    return (
        <Animated.View // Special animatable View
            style={{
                ...props.style,
                opacity: fadeAnim, // Bind opacity to animated value
            }}
        >
            {props.children}
        </Animated.View>
    );
};

// You can then use your `FadeInView` in place of a `View` in your components:

const Animation = () => {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <FadeInView
                style={{
                    width: 250,
                    height: 50,
                    backgroundColor: 'powderblue',
                }}
            >
                <Text style={{ fontSize: 28, textAlign: 'center', margin: 10 }}>
                    Fading in
                </Text>
            </FadeInView>
        </View>
    );
};

export default Animation;
