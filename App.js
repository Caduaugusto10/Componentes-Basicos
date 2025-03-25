import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default function App() {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Texto</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite algo aqui"
        onChangeText={setText}
        value={text}
      />

      <TouchableOpacity
        style={styles.customButton}
      >
        <Text style={styles.customButtonText}>Clique Aqui</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: '50%',
  },
  customButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 12,
  },
  customButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  text:{
    display: 'flex',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});