import React, { useState, useEffect } from 'react'; // ✅ make sure useEffect is imported
import { View, Text, TextInput, Button, StyleSheet, Alert, Platform, PermissionsAndroid } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { useNavigation, useRoute } from '@react-navigation/native';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

export default function ScanOrEnterCodeScreen() {
  const [deviceCode, setDeviceCode] = useState('');
  const navigation = useNavigation();
  const { type } = useRoute().params; // type = 'bp' | 'glucose' | 'scale'

  // ✅ ADD THIS:
  useEffect(() => {
    const checkCamera = async () => {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert('Camera permission denied');
      }
    };

    if (Platform.OS === 'android') {
      checkCamera();
    }
  }, []);

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } else {
      const result = await request(PERMISSIONS.IOS.CAMERA);
      return result === RESULTS.GRANTED;
    }
  };

  const onQRCodeScanned = (e) => {
    const code = e.data;
    setDeviceCode(code);
    Alert.alert('QR Code Scanned', `Device Code: ${code}`);
  };

  const handleContinue = () => {
    if (!deviceCode.trim()) {
      Alert.alert('Missing Code', 'Please scan a QR code or enter the code manually.');
      return;
    }

    // 🔜 Next: connect to device using iHealth SDK
    console.log(`Device type: ${type}, code: ${deviceCode}`);
    Alert.alert('Continue', `Proceeding with ${type} and code ${deviceCode}`);
    // navigation.navigate('NextScreen', { type, code: deviceCode });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Scan QR Code or Enter Device Code</Text>

      <QRCodeScanner
        onRead={onQRCodeScanned}
        reactivate
        showMarker
        containerStyle={styles.scanner}
        topContent={<Text style={styles.instructions}>Align QR inside the frame</Text>}
        onPermissionRequest={requestCameraPermission}
      />

      <Text style={styles.or}>OR</Text>

      <TextInput
        placeholder="Enter code manually"
        value={deviceCode}
        onChangeText={setDeviceCode}
        style={styles.input}
      />

      <Button title="Continue" onPress={handleContinue} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  heading: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  instructions: { textAlign: 'center', fontSize: 14 },
  scanner: { height: 240, marginBottom: 20 },
  or: { textAlign: 'center', marginVertical: 10, fontWeight: 'bold' },
  input: {
    borderColor: '#ccc', borderWidth: 1, borderRadius: 5,
    padding: 10, marginBottom: 20,
  },
});
