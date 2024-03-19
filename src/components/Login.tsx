import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import React, { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Login</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        placeholder='Username'
        value={username}
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        placeholder='Password'
        value={password}
        secureTextEntry={true}
      />
      <Button title='Logar' onPress={() => console.log(username, password)} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
