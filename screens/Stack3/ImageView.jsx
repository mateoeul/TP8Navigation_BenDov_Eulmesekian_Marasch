import React from 'react';
import { View, Image } from 'react-native';
import AppText from '../../components/AppText.jsx';

export default function ImageView() {
  return (
    <View style={{ flex: 1, backgroundColor: '#ffe4e1', padding: 20 }}>
      <AppText>Imagen Ampliada</AppText>
      <Image
        source={{ uri: 'https://via.placeholder.com/300' }}
        style={{ width: 300, height: 300 }}
      />
    </View>
  );
}