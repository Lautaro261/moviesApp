import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

export const FullScreenLoader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={'indigo'}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
