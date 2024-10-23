import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import Thankyou from './screens/Thankyou';
import PaymentMethods from './screens/PaymentMethods';
import HotelPhotos from './screens/HotelPhotos';
import OrderConfirm from './screens/OrderConfirm';
import Nearby from './screens/Nearby';
import Review from './screens/Review';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" /> 
      <Review />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
