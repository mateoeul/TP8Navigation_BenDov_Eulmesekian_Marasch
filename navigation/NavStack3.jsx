import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Gallery from '../screens/Stack3/Gallery.jsx';
import ImageView from '../screens/Stack3/ImageView.jsx';

const Stack = createNativeStackNavigator();

export default function Stack3() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Gallery" component={Gallery} />
      <Stack.Screen name="ImageView" component={ImageView} />
    </Stack.Navigator>
  );
}