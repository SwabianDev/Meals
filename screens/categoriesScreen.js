import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'

import CategoryGridTile from '../components/CategoryGridTile'

const renderCategoryItem = itemData => {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color}></CategoryGridTile>
  )
}

const CategoriesScreen = () => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={CATEGORIES}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={renderCategoryItem}
      />
      {/* <Button
        title="Go to Meals!"
        onPress={() => {
          props.navigation.navigate({ routeName: "CategoryMeals" });
        }}
      /> */}
    </View>
  )
}
export default CategoriesScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
})
