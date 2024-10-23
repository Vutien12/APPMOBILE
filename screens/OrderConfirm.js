import React, { useState } from 'react';
import { 
  Image, 
  ImageBackground, 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  TouchableOpacity, 
  TextInput,
  Alert 
} from 'react-native';

// Image imports
const muiTen = require('../assets/muiten.png');
const anhnen = require('../assets/heden.jpg');
const map = require('../assets/map.png');
const star = require('../assets/Star.png');
const share = require('../assets/share.png');
const line = require('../assets/Line.png');

const OrderConfirm = () => {
  const [promoCode, setPromoCode] = useState('');

  const handlePromoCodeInput = (text) => {
    setPromoCode(text);
  };

  const handleConfirmOrder = () => {
    // Here you can validate the promo code if needed
    // For demonstration, we'll assume any non-empty code is valid
    if (promoCode.trim()) {
      Alert.alert('Success', 'Promo code applied successfully!');
      // Optionally, clear the promo code
      // setPromoCode(''); // Uncomment if you want to clear the promo code
    } else {
      Alert.alert('Error', 'Please enter a valid promo code.');
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={anhnen} style={styles.backgroundImage}>
        <View style={styles.overlay} />
        
        <View style={styles.muiTenContainer}>
          <Image source={muiTen} style={styles.muiTen} />
          <Text style={styles.muiTenText}>Heden Golf</Text>
        </View>

        <Image source={share} style={styles.share} />
        <Image source={map} style={styles.map} />
        <Text style={styles.mapText}>Abidjan, Côte d'lvoire</Text>
        
        <View style={styles.starContainer}>
          <Image source={star} style={styles.star} />
          <Text style={styles.starTextBelow}>85/100 people liked this</Text>
          <Text style={styles.starTextRight}>3.9</Text>
        </View>

      </ImageBackground>

      <ScrollView style={styles.infoContainer}>
        <Text style={styles.roomTitle}>ROOM INFO</Text>
        <View style={styles.row}>
          <Text style={styles.label}>No.of rooms</Text>
          <Text style={styles.value}>1</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Room type</Text>
          <Text style={styles.value}>Air conditioned</Text>
        </View>

        {/* Room Info Section */}

        <View style={styles.row}>
          <Text style={styles.label}>Room</Text>
          <Text style={styles.value}>3 Nights ($127 x 3 = $381)</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Taxes</Text>
          <Text style={styles.value}>$25</Text>
        </View>

        {/* Line above Total */}
        <Image source={line} style={styles.lineMargin} />

        <View style={styles.row}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>$406</Text>
        </View>

        {/* Line below Total */}
        <Image source={line} style={styles.lineMargin} />

        <Text style={styles.guestTitle}>GUEST INFO</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>John Smith</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>johnsmith@gmail.com</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Mobile number</Text>
          <Text style={styles.value}>+225 698698966</Text>
        </View>
        <Image source={line} style={styles.lineMargin} />

        <Text style={styles.promoTitle}>PROMO CODE</Text>
        <Text style={styles.promoText}>If you have promo code please enter it below</Text>
        <TextInput
          style={styles.promoCodeInput}
          placeholder="Enter promo code"
          value={promoCode}
          onChangeText={handlePromoCodeInput}
        />

        {/* Line above Confirm order button */}
        <Image source={line} style={styles.lineMargin} />

        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmOrder}>
          <Text style={styles.confirmText}>Confirm order</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    width: '100%',
    height: '58%',
    justifyContent: 'space-between',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    width: '100%',
    height: '58%',
  },
  muiTenContainer: {
    position: 'absolute',
    top: 30,
    left: 19,
    flexDirection: 'row',
    alignItems: 'center',
  },
  muiTen: {
    width: 12.5,
    height: 16,
  },
  muiTenText: {
    marginLeft: 10,
    fontSize: 20,
    color: 'white',
  },
  map: {
    position: 'absolute',
    top: 225,
    left: 180,
    width: 17,
    height: 23,
  },
  mapText: {
    position: 'absolute',
    top: 230,
    left: 200,
    fontSize: 9.95,
    color: 'white',
  },
  starContainer: {
    position: 'absolute',
    bottom: 190,
    left: 24,
  },
  star: {
    width: 17,
    height: 17,
  },
  starTextBelow: {
    fontSize: 9.95,
    color: 'white',
    marginTop: 5,
    textAlign: 'center',
  },
  starTextRight: {
    position: 'absolute',
    left: 25,
    top: 0,
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
  },
  share: {
    position: 'absolute',
    top: 30,
    right: 18,
    width: 20.5,
    height: 27,
  },
  likeText: {
    fontSize: 12,
    color: 'white',
    marginLeft: 10,
  },
  lineMargin: {
    width: '100%',
    height: 1,
    backgroundColor: '#EBF1F5',
    marginVertical: 10,
  },
  infoContainer: {
    paddingHorizontal: 20,
    marginTop: -185,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  label: {
    fontSize: 14,
    color: '#333',
    left: 13,
  },
  value: {
    fontSize: 14,
    color: '#666',
  },
  totalLabel: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#333',
    left: 13,
  },
  totalValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  guestTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 15,
    color: '#333',
  },
  roomTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 15,
    marginBottom: 10,
    color: '#333',
  },
  promoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 15,
    color: '#333',
    marginBottom: 5,
  },
  promoText: {
    fontSize: 12.5,
    color: '#666',
    marginBottom: 35,
  },
  promoCodeInput: {
    borderBottomWidth: 1,  
    borderBottomColor: '#000', 
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  confirmButton: {
    backgroundColor: '#0090FF',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  confirmText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'normal',
  },
});

export default OrderConfirm;
