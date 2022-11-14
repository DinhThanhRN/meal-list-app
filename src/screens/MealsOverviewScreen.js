import React, {useLayoutEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import IconButton from '../components/IconButton';
import MealItem from '../components/MealItem';
import MealsList from '../components/MealsList/MealsList';
import {CATEGORIES, MEALS} from '../data/dummy-data';

const MealsOverviewScreen = ({route, navigation}) => {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter(
    mealItem => mealItem.categoryIds.indexOf(catId) >= 0,
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      category => category.id === catId,
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
