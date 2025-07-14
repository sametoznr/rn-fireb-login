import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React from 'react';

export default function Loading({ message }) {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <ActivityIndicator size="large" color="#000" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#3F72AF', // Güzel bir koyu mavi
    marginBottom: 12,
  },
});
