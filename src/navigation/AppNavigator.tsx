import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen'; // Ensure this import is correct
import SplashScreen from '../screens/SplashScreen';
import OnBoardingScreen from 'screens/OnBoardingScreen';
import HomeScreen from 'screens/HomeScreen';
const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="SignupScreen" component={SignupScreen} />
                <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
