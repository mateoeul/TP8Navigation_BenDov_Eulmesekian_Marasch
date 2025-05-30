import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppText from '../../components/AppText';
import AppButton from '../../components/AppButton';


export default function Help({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#e6ffe6', padding: 20 }}>
      <AppText>¿Necesitás ayuda?</AppText>
      <AppButton title="Ir a Contacto" onPress={() => navigation.navigate('Contact')} />
    </View>
  );
}