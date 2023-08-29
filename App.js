import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [heartRateLimits, setHeartRateLimits] = useState('');

  const calculateHeartRateLimits = (Age) => {
    if (Age === '') {
      setHeartRateLimits('');
      return;
    }

    const lowerLimit = Math.round((220 - parseInt(Age)) * 0.65);
    const upperLimit = Math.round((220 - parseInt(Age)) * 0.85);

    setHeartRateLimits(`Hr limits\n${lowerLimit} - ${upperLimit}`);
  };

  const handleAgeChange = (Age) => {
    setAge(Age);
    calculateHeartRateLimits(Age);
  };

  return (
    <View style={styles.container}>
      <Text>Age</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleAgeChange}
        value={age}
        keyboardType="numeric"
      />
      <Text style={styles.heartRateLimits}>{heartRateLimits}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  heartRateLimits: {
    marginTop: 10,
    textAlign: 'center',
  },
});
