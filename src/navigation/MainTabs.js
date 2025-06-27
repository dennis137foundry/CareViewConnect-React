import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DashboardScreen from '../screens/DashboardScreen';
import GetVitalsScreen from '../screens/GetVitalsScreen';
import HistoryScreen from '../screens/HistoryScreen';
import SettingsStack from '../navigation/SettingsStack';


const Tab = createBottomTabNavigator();

const getTabIcon = (routeName) => {
  switch (routeName) {
    case 'Dashboard':
      return 'dashboard';
    case 'GetVitals':
      return 'favorite';
    case 'History':
      return 'history';
    case 'Settings':
      return 'settings';
    default:
      return 'circle';
  }
};

export default function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => (
          <Icon name={getTabIcon(route.name)} size={size} color={color} />
        ),
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="GetVitals" component={GetVitalsScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{ headerShown: false }}
        />


    </Tab.Navigator>
  );
}
