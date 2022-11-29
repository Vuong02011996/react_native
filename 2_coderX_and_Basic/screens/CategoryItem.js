import { StyleSheet, Text, View, 
} from 'react-native';

export default function CategoryItem({ route, navigation }) {
  const { itemId, title } = route.params;
  console.log(itemId, title)

  
  return (
    <View style={styles.container}>
        <Text>Category Item</Text>
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
