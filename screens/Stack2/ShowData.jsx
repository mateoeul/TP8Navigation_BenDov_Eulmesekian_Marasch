import React from 'react';
import { View } from 'react-native';
import AppText from '../../components/AppText.jsx';

export default function ShowData({ route }) {
  const { nombre, telefono } = route.params;

  return (
    <View style={{ flex: 1, backgroundColor: '#e6f7ff', padding: 20 }}>
      <AppText>Nombre ingresado:</AppText>
      <AppText>{nombre}</AppText>

      <AppText>Teléfono ingresado:</AppText>
      <AppText>{telefono}</AppText>
    </View>
  );
}
