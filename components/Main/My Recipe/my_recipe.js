import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import ActionButton from 'react-native-action-button'
import { useEffect, useState } from 'react'
import styles from './styles'
import { FlatList } from 'react-native-gesture-handler'
import { getFirestore, collection, getDocs } from 'firebase/firestore';

import { app } from "../../Database/config";
const db = getFirestore(app);

export default function MyRecipe({ navigation }) {

  const data = [
    {
      id: '0',
      title: 'Delicious Pasta',
      description: 'Creamy pasta with veggies and cheese',
      image: require('../../../assets/fries.jpg'),
    },
  ];

  const [recipeData, setRecipeData] = useState(data);

  useEffect(() => {

    const fetchData = async () => {
      const recipeRef = collection(db, 'recipes');
      const querySnapshot = await getDocs(recipeRef);

      const fetchedData = [];
      querySnapshot.forEach((doc) => {
        fetchedData.push({ id: doc.id, ...doc.data() });
      });
      
      setRecipeData(fetchedData);
    };

    fetchData();
  }, []);


  const onViewRecipe = (item) => {
    navigation.navigate('View Recipe', { item });
  }
  const renderItem = ({ item }) => (
    console.log("image url => ", item.imageURI),
    <TouchableOpacity onPress={() => onViewRecipe(item)}>
      <View style={styles.recipeContainer}>
        <Image source={{ uri: item.imageURI }} style={styles.recipeImage} />
        <Text style={styles.recipeTitle}>{item.recipeName}</Text>
        {/* <Text style={styles.recipeDescription}>{item.description}</Text> */}
      </View>
    </TouchableOpacity>
  );


  return (
    <View style={styles.container}>
      {/* <ScrollView> */}

        <FlatList
          data={recipeData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.feedContainer}
          showsVerticalScrollIndicator={false}
        />

      {/* </ScrollView> */}
      <ActionButton
        buttonColor="#008080"
        spacing={60}
        elevation={10}
        onPress={() => navigation.navigate('Add Recipe')}></ActionButton>
    </View>

  )
}