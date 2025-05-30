import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Form from '../screens/Stack2/Form.jsx';
import ShowData from '../screens/Stack2/ShowData.jsx';

const Stack = createNativeStackNavigator();

export default function Stack2() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Form" component={Form} />
      <Stack.Screen name="ShowData" component={ShowData} />
    </Stack.Navigator>
  );
}
