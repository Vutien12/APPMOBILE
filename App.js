import React from 'react';
import { StyleSheet, View } from 'react-native';
import Screen1 from './screens/Redeemvoucher';
import Screen2 from './screens/Ratingsreviews';
import Screen3 from './screens/Orderfood';
import Screen4 from './screens/Fooddetails';
import Screen5 from './screens/Foodcart';
import Screen12 from './screens/Hotelslist';
import Screen13 from './screens/Amenities';
import Screentest from './screens/Sreentest';
import Screen36 from './screens/Myprofile';
import Screen44 from './screens/Addnewcard';
import Screen45 from './screens/Editprofile';
import NavigationMenu from './components/NavigationMenu';
import Card from './components/Card';

const App = () => {
  return (
    <View style={styles.container}>
      <Screen13 />
    </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
