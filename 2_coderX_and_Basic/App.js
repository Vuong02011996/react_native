import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    FlatList,
    TouchableOpacity,
} from 'react-native';
// import CategoryList from './components/CategoryList';
// import AppNavigation from './AppNavigation'
import AppLearnBasic from './0_The_Basic/AppLearnBasic';
import AppLearnDesign from './1_Design/AppLearnDesign';

function App() {
    return (
        <AppLearnDesign></AppLearnDesign>
        // <AppNavigation></AppNavigation>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;
