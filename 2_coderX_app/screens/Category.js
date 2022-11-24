import { StyleSheet, Text, View, 
} from 'react-native';

export default function Category() {

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
