import React from 'react';
import { View } from 'react-native';
import AppText from '../../components/AppText.jsx';

export default function Details() {
  return (
    <View style={{ flex: 1, backgroundColor: '#f0f8ff', padding: 20 }}>
      <AppText>Esta es la pantalla Details</AppText>
    </View>
  );
}