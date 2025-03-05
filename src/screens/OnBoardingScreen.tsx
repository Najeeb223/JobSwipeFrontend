import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import LottieView from 'lottie-react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/types'; 

// Type for navigation prop
type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList, // Your RootStackParamList type
  'HomeScreen' // The name of the screen
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const { width, height } = Dimensions.get('window');

const slides = [
  {
    id: '1',
    animation: require('../animations/firstCarousel.json'),
    heading: 'Your Career, Your Choice',
    subtext: 'Discover your dream job with a simple swipe. JobMatch transforms job hunting from a chore into an exciting journey of possibilities.',
    showSkip: true,
  },
  {
    id: '2',
    animation: require('../animations/secondCarousel.json'),
    heading: 'Swipe Your Way to Success',
    subtext: 'Right to apply, left to pass. It\'s that simple. No more endless scrolling or complicated applications. Your perfect job is just a swipe away.',
    showSkip: true,
  },
  {
    id: '3',
    animation: require('../animations/thirdCarousel.json'),
    heading: 'Find Your Perfect Career Match',
    subtext: 'JobMatch: Your Career Matchmaker. We cut through the noise and connect you with opportunities that truly matter.',
    showSkip: false,
  },
];

const OnBoardingScreen = ({ navigation }: Props) => {
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSkip = () => {
    navigation.navigate('HomeScreen'); // Navigate to Home screen
  };

  const renderItem = ({ item }: { item: typeof slides[0] }) => (
    <View style={styles.slide}>
      <Text style={styles.heading}>{item.heading}</Text>
      <LottieView source={item.animation} autoPlay loop style={styles.animation} />
      <Text style={styles.subtext}>{item.subtext}</Text>
      {item.showSkip ? (
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.startButton} onPress={handleSkip}>
          <Text style={styles.buttonText}>Start Searching</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={slides}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={index => setActiveSlide(index)}
        firstItem={activeSlide}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Sleek Grey background
  },
  slide: {
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#004080', // Rich Blue
    textAlign: 'center',
    marginBottom: 20,
  },
  animation: {
    width: 300,
    height: 300,
  },
  subtext: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  skipButton: {
    marginTop: 30,
    padding: 15,
    borderWidth: 1,
    borderColor: '#004080',
    borderRadius: 10,
  },
  startButton: {
    marginTop: 30,
    backgroundColor: '#004080',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default OnBoardingScreen;
