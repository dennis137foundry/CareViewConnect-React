import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DEVICE_TYPES = [
  { id: 'bp', label: 'Blood Pressure Monitor' },
  { id: 'glucose', label: 'Glucose Meter' },
  { id: 'scale', label: 'Weight Scale' },
];

export default function AddDeviceScreen() {
  const navigation = useNavigation();

  const handleDeviceSelect = (type) => {
    navigation.navigate('ScanOrEnterCode', { type });
  };


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select Device Type</Text>
      {DEVICE_TYPES.map(device => (
        <TouchableOpacity
          key={device.id}
          style={styles.card}
          onPress={() => handleDeviceSelect(device.id)}
        >
          <Text style={styles.label}>{device.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  heading: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  card: {
    backgroundColor: '#eee',
    padding: 20,
    borderRadius: 8,
    marginBottom: 15,
  },
  label: { fontSize: 16 },
});
