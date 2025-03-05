import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/types'; // import the types for your stack

// Type for navigation prop
type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList, // Your RootStackParamList type
  'HomeScreen' // The name of the screen
>;

// Define props including the typed navigation
type Props = {
  navigation: HomeScreenNavigationProp;
};

// HomeScreen component with typed navigation prop
const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to the Home Screen</Text>
      <Button 
        title="Go to Onboarding" 
        onPress={() => navigation.navigate('OnboardingScreen')} // Example of navigation
      />
    </View>
  );
};

export default HomeScreen;
