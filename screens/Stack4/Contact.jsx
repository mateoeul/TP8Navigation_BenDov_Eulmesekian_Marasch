import React from 'react';
import { View } from 'react-native';
import AppText from '../../components/AppText.jsx';

export default function Contact() {
  return (
    <View style={{ flex: 1, backgroundColor: '#e6ffe6', padding: 20 }}>
      <AppText>Información de contacto: contacto@example.com</AppText>
    </View>
  );
}