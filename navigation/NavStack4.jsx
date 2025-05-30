import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Help from '../screens/Stack4/Help.jsx';
import Contact from '../screens/Stack4/Contact.jsx';

const Stack = createNativeStackNavigator();

export default function Stack4() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Help" component={Help} />
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
}
