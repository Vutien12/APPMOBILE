import React from 'react';
import { StyleSheet, View } from 'react-native';
import SplashScreen from './screens/SplashScreen';
import RegisterScreen from './screens/RegisterScreen';
import OtpVerificationScreen from './screens/OtpVerificationScreen';
import LoginScreen from './screens/LoginScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import HomeScreen from './screens/HomeScreen';
import BookingHistoryScreen from './screens/BookingHistoryScreen';
import BookingDetailsScreen from './screens/BookingDetailsScreen'

const App = () => {
  return (
    <View style={styles.container}>
      <ForgotPasswordScreen/>
    </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;