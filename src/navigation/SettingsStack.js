import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../screens/SettingsScreen';
import AddDeviceScreen from '../screens/AddDeviceScreen';
import ScanOrEnterCodeScreen from '../screens/ScanOrEnterCodeScreen';

const Stack = createStackNavigator();

export default function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SettingsHome" component={SettingsScreen} options={{ title: 'Settings' }} />
      <Stack.Screen name="AddDevice" component={AddDeviceScreen} options={{ title: 'Add Device' }} />
      <Stack.Screen
        name="ScanOrEnterCode"
        component={ScanOrEnterCodeScreen}
        options={{ title: 'Connect Device' }}
        />
    </Stack.Navigator>
  );
}
