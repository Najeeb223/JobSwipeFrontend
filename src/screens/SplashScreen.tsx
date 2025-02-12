import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login'); // Navigate to Login Screen
        }, 3000); // 3-second delay
    }, [navigation]); // Add navigation as dependency

    return (
        <View style={styles.container}>
            <Image source={require('../assets/JobSwipe Logo.png')} style={styles.logo} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#313CA1', // Matches website color scheme
    },
    logo: {
        width: 150, // Adjust as needed
        height: 150,
        resizeMode: 'contain',
    },
});

export default SplashScreen;
