import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DashboardScreen = () => (
<View style={styles.container}>
    <Text>Dashboard</Text>
</View>
);

const styles = StyleSheet.create({
container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

export default DashboardScreen;
