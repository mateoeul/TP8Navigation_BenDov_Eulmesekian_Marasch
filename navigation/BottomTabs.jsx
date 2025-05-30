import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import Stack1 from './NavStack1.jsx';
import Stack2 from './NavStack2.jsx';
import Stack3 from './NavStack3.jsx';
import Stack4 from './NavStack4.jsx';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Stack1: 'home',
            Stack2: 'person',
            Stack3: 'images',
            Stack4: 'call',
          };
          return <Ionicons name={icons[route.name]} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Stack1" component={Stack1} />
      <Tab.Screen name="Stack2" component={Stack2} />
      <Tab.Screen name="Stack3" component={Stack3} />
      <Tab.Screen name="Stack4" component={Stack4} />
    </Tab.Navigator>
  );
}
