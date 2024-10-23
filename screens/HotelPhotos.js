import React, { useState } from 'react';
import { 
  Image, 
  ImageBackground, 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  TouchableOpacity, 
  Modal 
} from 'react-native';
import Swiper from 'react-native-swiper';

// Image imports
const muiTen = require('../assets/muiten.png');
const closeIcon = require('../assets/+.png');
const anhnen = require('../assets/heden.jpg');
const map = require('../assets/map.png');
const star = require('../assets/Star.png');
const share = require('../assets/share.png');
const line = require('../assets/Line.png');
const Rectangle31 = require('../assets/Rectangle 3.1.png');
const Rectangle34 = require('../assets/Rectangle 3.4.png');
const Rectangle35 = require('../assets/Rectangle 3.5.png');
const Rectangle36 = require('../assets/Rectangle 3.6.png');
const Rectangle37 = require('../assets/Rectangle 3.7.png');
const Rectangle38 = require('../assets/Rectangle 3.8.png');
const Rectangle39 = require('../assets/Rectangle 3.9.png');
const Rectangle310 = require('../assets/Rectangle 3.10.png');
const Rectangle311 = require('../assets/Rectangle 3.11.png');
const Rectangle312 = require('../assets/Rectangle 3.12.png');
const Rectangle313 = require('../assets/Rectangle 3.13.png');
const Rectangle314 = require('../assets/Rectangle 3.14.png');
// Image imports
const hotel = require('../assets/hotel.jpg');
const hotel1 = require('../assets/hotel1.jpg');
const hotel2 = require('../assets/hotel2.jpg');
const hotel3 = require('../assets/hotel3.jpg');
const hotel4 = require('../assets/hotel4.jpg');
const hotel5 = require('../assets/hotel5.jpg');
const hotel6 = require('../assets/hotel6.jpg');
const hotel7 = require('../assets/hotel7.jpg');
const hotel8 = require('../assets/hotel8.jpg');
const hotel9 = require('../assets/hotel9.jpg');
const hotel10 = require('../assets/hotel10.jpg');
const hotel11 = require('../assets/hotel11.jpg');

const HotelPhotos = () => {
  const [activeButton, setActiveButton] = useState('Review');
  const [modalVisible, setModalVisible] = useState(false);

  // List of images for the slider
  const images = [
    hotel, hotel1, hotel2, 
    hotel3, hotel4, hotel5, 
    hotel6, hotel7, hotel8, 
    hotel9, hotel10, hotel11
  ];

  return (
    <View style={styles.container}>
      <ImageBackground source={anhnen} style={styles.backgroundImage}>
        <View style={styles.overlay} />
        
        <View style={styles.muiTenContainer}>
          <Image source={muiTen} style={styles.muiTen} />
          <Text style={styles.muiTenText}>Heden Golf</Text>
        </View>

        <Image source={share} style={styles.share} />
        <Image source={line} style={styles.line} />
        <Image source={map} style={styles.map} />
        <Text style={styles.mapText}>Abidjan, Côte d'lvoire</Text>
        
        <View style={styles.starContainer}>
          <Image source={star} style={styles.star} />
          <Text style={styles.starTextBelow}>85/100 people liked this</Text>
          <Text style={styles.starTextRight}>3.9</Text>
        </View>

        {/* Rounded button with three sections */}
        <View style={styles.roundedButton}>
          {['Review (106)', 'Photo (10)', 'Near by (24)'].map((label, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.roundedButtonSection,
                activeButton === label && styles.activeButtonSection,
              ]}
              onPress={() => {
                setActiveButton(label);
                if (label === 'Photo (10)') {
                  setModalVisible(true); // Open the modal for images
                }
              }}
            >
              <Text
                style={[
                  styles.buttonText,
                  activeButton === label && styles.activeButtonText,
                ]}
              >
                {label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ImageBackground>

      <ScrollView style={styles.gridContainer} horizontal={false}>
        <View style={styles.gridInnerContainer}>
          {[Rectangle31, Rectangle34, Rectangle35, Rectangle36, Rectangle37, Rectangle38, Rectangle39, Rectangle310, Rectangle311, Rectangle312, Rectangle313, Rectangle314].map((image, index) => (
            <Image key={index} source={image} style={styles.gridImage} />
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.squareButton}>
        <View style={styles.innerSquareButton}>
          <TouchableOpacity style={[styles.squareButtonSection, styles.whiteBackground]}>
            <View style={styles.priceContainer}>
              <Text style={styles.strikeThroughText}>$150</Text>
              <Text style={styles.buttonText1}>  $127</Text>
            </View>
            <Text style={styles.additionalText}>AGV/NIGHT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.squareButtonSection}>
            <Text style={styles.buttonText2}>BOOKING NOW</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      {/* Modal for image slider */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Swiper style={styles.wrapper} showsButtons={true}>
            {images.map((image, index) => (
              <View key={index} style={styles.slide}>
                <Image source={image} style={styles.sliderImage} />
              </View>
            ))}
          </Swiper>
          {/* Close button replaced with an image */}
          <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
            <Image source={closeIcon} style={styles.closeIcon} />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  whiteBackground: {
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
  line: {
    position: 'absolute',
    top: '73%',
    left: 0,
    width: '100%',
    height: 1,
    backgroundColor: '#EBF1F5',
  },
  roundedButton: {
    position: 'absolute',
    top: '60.5%',
    left: '3.8%',
    backgroundColor: '#fff',
    borderRadius: 20,
    flexDirection: 'row',
    alignSelf: 'center',
    width: '93%', // Adjust width
    justifyContent: 'space-evenly',
    overflow: 'hidden',
    borderWidth: 1, 
    borderColor: '#0090FF', 
  },
  roundedButtonSection: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 0,
  },
  activeButtonSection: {
    backgroundColor: '#0090FF',
  },
  buttonText: {
    color: '#0090FF',
    textAlign: 'center',
  },
  activeButtonText: {
    color: '#fff',
  },
  squareButton: {
    backgroundColor: '#0090FF',
    paddingVertical: 0,
    alignSelf: 'center',
    marginTop: 8,
    alignItems: 'center',
  },
  innerSquareButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  squareButtonSection: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  buttonText2: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 13.5,
  },
  buttonText1: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  additionalText: {
    color: '#000',
    fontSize: 16,
    marginTop: 0,
    textAlign: 'center',
  },
  strikeThroughText: {
    textDecorationLine: 'line-through', 
    fontSize: 13,
    fontWeight: 'normal',
    color: 'gray', 
  },
  gridContainer: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: -115,
  },
  gridInnerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridImage: {
    width: 110,
    height: 110,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#fff',
    resizeMode: 'cover',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center', // Align items at the start
    alignItems: 'center',
    backgroundColor: 'rgba(100, 10, 0, 0.0)', // Translucent black background
  },
  backgroundImageBlurred: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  wrapper: {
    height: '80%', // Adjust height to fit the screen better
    justifyContent: 'center',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderImage: {
    width: '100%',
    height: '80%',
    resizeMode: 'contain',
  },
  closeButton: {
    position: 'absolute',
    top: 12, // Adjust position as needed
    right: 10,
    padding: 10,
  },
  closeIcon: {
    width: 20,
    height: 20, // Adjust size based on your icon
  },
});

export default HotelPhotos;
