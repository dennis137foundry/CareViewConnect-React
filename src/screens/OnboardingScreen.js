import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to CareView Connect</Text>
      <Button title="Get Started" onPress={() => navigation.replace('MainTabs')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default OnboardingScreen;
