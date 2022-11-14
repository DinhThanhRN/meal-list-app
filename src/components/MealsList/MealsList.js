import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import MealItem from '../MealItem';

const MealsList = ({items}) => {
  const renderMealItem = itemData => {
    const item = itemData.item;
    const pressHandler = () => {
      navigation.navigate('MealDetail', {
        title: item.title,
        ingredients: item.ingredients,
        steps: item.steps,
      });
    };
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} onPress={pressHandler} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
