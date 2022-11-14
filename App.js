import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Provider} from 'react-redux';
import {Icon} from '@rneui/themed';

import CategoriesScreen from './src/screens/CategoriesScreen';
import MealsOverviewScreen from './src/screens/MealsOverviewScreen';
import MealDetailScreen from './src/screens/MealDetailScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
import {store} from './src/store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#351401'},
        headerTintColor: 'white',
        sceneContainerStyle: {backgroundColor: '#3f2f25'},
        drawerContentStyle: {backgroundColor: '#351401'},
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1',
      }}>
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          headerTitleAlign: 'center',
          drawerIcon: ({color, size}) => (
            <Icon name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({color, size}) => (
            <Icon color={color} size={size} name="star" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: '#351401'},
            headerTintColor: 'white',
            contentStyle: {backgroundColor: '#3f2f25'},
          }}>
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              title: 'All Categories',
              headerShown: false,
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={{
              title: 'About The Meal',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
