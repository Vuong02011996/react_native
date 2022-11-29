import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React from 'react';

// First component
const Cat = () => {
    return (
        <View style={styles.container}>
            <Text>ABC</Text>
        </View>
    );
};

// JSX, Any JavaScript expression will work between curly braces {}
// curly braces as creating a portal into JS functionality in your JSX
// Because JSX is included in the React library, it won’t work if you don’t have import React from 'react' at the top of your file!
const getFullName = (firstName, secondName, thirdName) => {
    return firstName + ' ' + secondName + ' ' + thirdName;
};

const JSX = () => {
    return (
        <View style={styles.container}>
            <Text>Hello, I am {getFullName('Rum', 'Tum', 'Tugger')}!</Text>
        </View>
    );
};

// Props
// Props let you customize React components
// You can build many things with props and the Core Components Text, Image, and View!
// But to build something interactive, you’ll need state
const PropsTest = () => {
    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
                }}
                style={{ width: 200, height: 200 }}
            />
        </View>
    );
};

// State
// While you can think of props as arguments you use to configure how components render,
// state is like a component’s personal data storage.
// State is useful for handling data that changes over time or that comes from user interaction

// As a general rule, use props to configure a component when it renders.
//  Use state to keep track of any component data that you expect to change over time.

// isHungry is a const, it is seemingly reassignable! Because setIsHungry is called, its component will re-render,
// useState will give us the next value of isHungry

const StateTest = () => {
    const [isHungry, setIsHungry] = React.useState(true);

    return (
        <View style={styles.container}>
            <Text> I am Cat, and I am {isHungry ? 'Hungry' : 'Full'}</Text>
            <Button
                onPress={() => {
                    setIsHungry(false);
                }}
                title="Click me to feed the cat"
            ></Button>
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
});

const ReactFundamental = StateTest;
export default ReactFundamental;
