import React from 'react';
import { View, Image } from 'react-native';
import AppText from '../../components/AppText.jsx';
import AppButton from '../../components/AppButton';


export default function Gallery({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#ffe4e1', padding: 20 }}>
      <AppText>Galería de imágenes</AppText>
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        style={{ width: 150, height: 150, marginVertical: 10 }}
      />
      <AppButton title="Ver Imagen" onPress={() => navigation.navigate('ImageView')} />
    </View>
  );
}