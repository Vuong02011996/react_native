import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, 
	FlatList, 
	TouchableOpacity 
} from 'react-native';
import CategoryList from "../components/CategoryList"

export default function Categories({ navigation }) {

  const state = {
    categories: [
      {id: 1, name: "Hoa 1"},
      {id: 2, name: "Hoa 2"},
      {id: 3, name: "Hoa 3"},
      {id: 4, name: "Hoa 4"},
    ]
  }

  const categories = state.categories

  return (
    <View style={styles.container}>
      {/* <ScrollView style={{paddingLeft: 32, paddingRight: 32}}> */}
		  {/* Cách 1: render list dùng map */}
		  {/* {state.categories.map(category => {
			  return <CategoryList key={category.id} category={category}/>
		  })} */}

		  {/* Cách 2: Dùng FlatList */}
		  <FlatList 
		  data={categories}
			renderItem ={({item}) => {
				console.log("item: ", item)
				return <CategoryList category={item} onPress={() => {
          navigation.navigate('CategoryItem',
          {
            itemId: item.id,
            title: item.name,
          })
        }}/>
			}}
			keyExtractor={(item) => `${item.id}`}
			contentContainerStyle={{paddingLeft: 32, paddingRight: 32}}
		  />
      {/* </ScrollView> */}
      <StatusBar style="auto" />
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
