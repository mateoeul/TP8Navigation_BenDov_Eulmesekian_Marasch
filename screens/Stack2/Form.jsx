import React, { useState } from 'react';
import { View } from 'react-native';
import AppText from '../../components/AppText';
import AppInput from '../../components/AppInput';
import AppButton from '../../components/AppButton';

export default function Form({ navigation }) {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: '#e6f7ff', padding: 20 }}>
      <AppText>Ingresá tu nombre:</AppText>
      <AppInput placeholder="Nombre" value={nombre} onChangeText={setNombre} />

      <AppText>Ingresá tu teléfono:</AppText>
      <AppInput placeholder="Teléfono" value={telefono} onChangeText={setTelefono} keyboardType="phone-pad" />

      <AppButton
        title="Enviar"
        onPress={() => navigation.navigate('ShowData', { nombre, telefono })}
      />
    </View>
  );
}
