import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Main, Edit} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
        gestureDirection: 'horizontal',
      }}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Edit" component={Edit} />
    </Stack.Navigator>
  );
};

export default Router;
