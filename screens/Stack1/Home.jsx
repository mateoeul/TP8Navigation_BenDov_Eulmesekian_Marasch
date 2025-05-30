import React from 'react';
import { View } from 'react-native';
import AppText from '../../components/AppText.jsx';
import AppButton from '../../components/AppButton';



export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#f0f8ff', padding: 20 }}>
      <AppText>Bienvenido a la pantalla Home</AppText>
      <AppButton title="Ir a Details" onPress={() => navigation.navigate('Details')} />
    </View>
  );
}