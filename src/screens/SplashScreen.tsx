import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
};

type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;

const SplashScreen = () => {
    const navigation = useNavigation<SplashScreenNavigationProp>();

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login');
        }, 3000);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/JobSwipe_Logo.png')} style={styles.logo} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#313CA1',
    },
    logo: {
        width: 500,  // Increased width
        height: 500, // Increased height
        resizeMode: 'contain',
    },
});

export default SplashScreen;
