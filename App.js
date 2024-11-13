import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import các màn hình
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import OtpVerificationScreen from './screens/OtpVerificationScreen';
import HomeScreen from './screens/HomeScreen';
import BookingHistoryScreen from './screens/BookingHistoryScreen';
import BookingDetailsScreen from './screens/BookingDetailsScreen';
import Addnewcard from './screens/Addnewcard';
import Amenities from './screens/Amenities';
import Editprofile from './screens/Editprofile';
import Foodcart from './screens/Foodcart';
import Fooddetails from './screens/Fooddetails';
import Hotelslist from './screens/Hotelslist';
import HotelPhotos from './screens/HotelPhotos';
import Myprofile from './screens/Myprofile';
import Nearby from './screens/Nearby';
import OrderConfirm from './screens/OrderConfirm';
import Orderfood from './screens/Orderfood';
import PaymentMethods from './screens/PaymentMethods';
import Ratingsreviews from './screens/Ratingsreviews';
import Redeemvoucher from './screens/Redeemvoucher';
import Review from './screens/Review';
import Thankyou from './screens/Thankyou';

// Tạo Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
        <Stack.Screen name="OtpVerificationScreen" component={OtpVerificationScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="BookingHistoryScreen" component={BookingHistoryScreen} />
        <Stack.Screen name="BookingDetailsScreen" component={BookingDetailsScreen} />
        <Stack.Screen name="Addnewcard" component={Addnewcard} />
        <Stack.Screen name="Amenities" component={Amenities} />
        <Stack.Screen name="Editprofile" component={Editprofile} />
        <Stack.Screen name="Foodcart" component={Foodcart} />
        <Stack.Screen name="Fooddetails" component={Fooddetails} />
        <Stack.Screen name="Hotelslist" component={Hotelslist} />
        <Stack.Screen name="HotelPhotos" component={HotelPhotos} />
        <Stack.Screen name="Myprofile" component={Myprofile} />
        <Stack.Screen name="Nearby" component={Nearby} />
        <Stack.Screen name="OrderConfirm" component={OrderConfirm} />
        <Stack.Screen name="Orderfood" component={Orderfood} />
        <Stack.Screen name="PaymentMethods" component={PaymentMethods} />
        <Stack.Screen name="Ratingsreviews" component={Ratingsreviews} />
        <Stack.Screen name="Redeemvoucher" component={Redeemvoucher} />
        <Stack.Screen name="Review" component={Review} />
        <Stack.Screen name="Thankyou" component={Thankyou} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
