import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the navigation types
type StackParamList = {
  Login: undefined;
  SignupScreen: undefined;
};

type NavigationProp = StackNavigationProp<StackParamList, 'Login'>;

const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require('../assets/images/JobSwipe_Logo.png')} style={styles.logo} />

      {/* Email Input */}
      <TextInput
        placeholder="Email"
        placeholderTextColor="#B0B0B0"
        style={styles.input}
        keyboardType="email-address"
      />

      {/* Password Input */}
      <TextInput
        placeholder="Password"
        placeholderTextColor="#B0B0B0"
        style={styles.input}
        secureTextEntry
      />

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('SignupScreen')}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#313CA1', // Rich blue background
    padding: 20,
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 50,
    resizeMode: 'contain',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#E0E0E0',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#313CA1',
    borderWidth: 1,
    borderColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: 15,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpButton: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  signUpButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
