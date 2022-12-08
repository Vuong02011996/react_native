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
import AppNavigation from './AppNavigation';
// import AppLearnBasic from './0_The_Basic/AppLearnBasic';
// import AppLearnDesign from './1_Design/AppLearnDesign';
// import AppLearnCoreComponents from './2_Core_Components/AppLearnCoreComponents';
// import AppLearnNatigation from './3_Navigation/AppLearnNatigation';

function App() {
    return (
        // <AppLearnBasic></AppLearnBasic>
        <AppNavigation></AppNavigation>
    );
}
export default App;
