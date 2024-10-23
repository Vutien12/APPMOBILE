import React, { useState } from 'react';
import { 
  Image, 
  ImageBackground, 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  TouchableOpacity,
  SafeAreaView, 
} from 'react-native';

// Image imports
const muiTen = require('../assets/muiten.png');
const closeIcon = require('../assets/+.png');
const anhnen = require('../assets/heden.jpg');
const map = require('../assets/map.png');
const star = require('../assets/Star.png');
const share = require('../assets/share.png');
const line = require('../assets/Line.png');
const rate1 = require('../assets/rate1.png');
const camera = require('../assets/camera.png');
const subway = require('../assets/subway.png');
const plane = require('../assets/plane.png');
const direction1 = require('../assets/direction1.png');
const direction2 = require('../assets/direction2.png');
const car = require('../assets/car.png');
const anhR1 = require('../assets/anhR1.png');
const anhR2 = require('../assets/anhR2.png');

const Nearby = () => {
  const [activeButton, setActiveButton] = useState('Review');
  const [modalVisible, setModalVisible] = useState(false);

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
              style={[styles.roundedButtonSection, activeButton === label && styles.activeButtonSection]}
              onPress={() => {
                setActiveButton(label);
                if (label === 'Near by (24)') {
                  setModalVisible(true); 
                }
              }}
            >
              <Text style={[styles.buttonText, activeButton === label && styles.activeButtonText]}>
                {label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ImageBackground>
      <SafeAreaView style={{ flex:1, marginTop: -110 }}>  
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
        {/* Title and Subtitle below the line */}
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>LOCATION OVER VIEW</Text>
            <Text style={styles.subtitleText}>Set in andscaped gardens overlooking the Ébrié lagoon, this
            upscale hotel featuring comtemporary local art and architectural
            touches is 3 km from Mosquée de la riviéra and 17 km from 
            Banco National Park.
            </Text>
        <Image source={line} style={styles.line1} />
        </View>
        <View style={styles.titleContainer}>
            <Text style={styles.titleText1}>HOTEL LOCATION SCORE</Text>
            <Text style={styles.subtitleText1}>Good location overall for sightseeing, recreation, and getting around</Text>
            <Image source={rate1} style={styles.rate1} />
            <Text style={styles.subtitleText2}>Scores are calculated based on data from google Maps and evaluate the hotel’s proximity to nearby things to do, transportation and airport.</Text>
            <Image source={camera} style={styles.camera} />
            <Text style={styles.subtitleText3}>3.8 Great for promximity things to do.</Text>
            <Image source={subway} style={styles.subway} />
            <Text style={styles.subtitleText4}>0.0 No nearby transit options.</Text>
            <Image source={plane} style={styles.plane} />
            <Text style={styles.subtitleText5}>2.2 OK for Airport access.</Text>
            <Text style={styles.titleText2}>Abidjan, Côte d'Ivoire</Text>
            <Image source={direction1} style={styles.direction1} />
            <Image source={direction2} style={styles.direction2} />
            <Text style={styles.titleText2right}>Directions</Text>
        <Image source={line} style={styles.line2} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText3}>THINGS TO DO</Text>
          <Image source={anhR1} style={styles.anhR1} />
          <Text style={styles.subtitleText6}>St. Paul's Cathedral, Abidjan</Text>
          <Text style={styles.subtitleText7}>This contemporary, landmark cathedral features unique architecture, regular mass services </Text>
          <Text style={styles.subtitleText8}>Rating (1,649)</Text>
          <Text style={styles.subtitleText8right}>Distance</Text>
          <Text style={styles.subtitleText8belowright}>6 min</Text>
          <Image source={car} style={styles.car1} />
          <Image source={star} style={styles.star2} />
          <Text style={styles.starTextRight2}>4.4</Text>
          <Image source={line} style={styles.line3} />
          <Image source={anhR2} style={styles.anhR2} />
          <Text style={styles.subtitleText9}>Banco National Park</Text>
          <Text style={styles.subtitleText10}>Tranquil old-growth forest in the heart of Abidjan featuring a variety of plants & animals.</Text>
          <Text style={styles.subtitleText11}>Rating (1,649)</Text>
          <Text style={styles.subtitleText11right}>Distance</Text>
          <Text style={styles.subtitleText11belowright}>27 min</Text>
          <Image source={car} style={styles.car2} />
          <Image source={star} style={styles.star3} />
          <Text style={styles.starTextRight3}>4.4</Text>
          <Image source={line} style={styles.line4} />
        </View>
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
        </ScrollView>
        </SafeAreaView>  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    alignItems: 'center',
    top: 0,
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingVertical: 2,
    paddingHorizontal: 0, 
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    right: 71.5,
  },
  subtitleText: {
    fontSize: 11.5,
    color: '#000',
    left: 13.5,
    paddingRight: 24.5,
  },
  titleText1: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    right: 59.5,
  },
  titleText2: {
    fontSize: 11.5,
    fontWeight: 'bold',
    color: '#000',
    right: 102.5,
    marginTop:  85,
  },
  titleText2right: {
    fontSize: 11.5,
    fontWeight: 'bold',
    color: '#0090FF',
    right: -120,
    top:  -19,
  },
  titleText3: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    left: -105,
    marginTop:  -11.5,
  },
  subtitleText1: {
    fontSize: 11.5,
    color: 'gray',
    left: 105,
    paddingRight: 120,
    marginTop:  35,
  },
  subtitleText2: {
    fontSize: 11.5,
    color: 'gray',
    left: 13.5,
    paddingRight: 24.5,
    top: 170,
  },
  subtitleText3: {
    fontSize: 11.5,
    color: '#000',
    left: 25.5,
    paddingRight: 24.5,
    fontWeight: 'bold',
    marginTop: 0,
  },
  subtitleText4: {
    fontSize: 11.5,
    fontWeight: 'bold',
    color: '#000',
    left: 1.5,
    paddingRight: 24.5,
    marginTop: 25,
  },
  subtitleText5: {
    fontSize: 11.5,
    color: '#000',
    left: -10,
    paddingRight: 24.5,
    fontWeight: 'bold',
    marginTop: 25,
  },
  subtitleText6: {
    fontSize: 11.5,
    color: '#000',
    left: 94,
    paddingRight: 120,
    marginTop:  19,
    fontWeight: 'bold',
  },
  subtitleText7: {
    fontSize: 11,
    color: 'gray',
    left: 128,
    paddingRight: 133,
    marginTop:  0,
  },
  subtitleText8: {
    fontSize: 11,
    color: '#000',
    left: 49,
    paddingRight: 120,
    marginTop:  5,
  },
  subtitleText8right: {
    fontSize: 11,
    color: '#000',
    left: 193,
    paddingRight: 120,
    marginTop:  -18,
  },
  subtitleText8belowright: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#000',
    left: 200,
    paddingRight: 120,
    top: 6.5,
  },
  subtitleText9: {
    fontSize: 11.5,
    color: '#000',
    left: 70,
    paddingRight: 120,
    marginTop:  20,
    fontWeight: 'bold',
  },
  subtitleText10: {
    fontSize: 11,
    color: 'gray',
    left: 126.5,
    paddingRight: 135,
    marginTop:  1,
  },  
  subtitleText11: {
    fontSize: 11,
    color: '#000',
    left: 49.5,
    paddingRight: 120,
    marginTop:  5,
  },
  subtitleText11right: {
    fontSize: 11,
    color: '#000',
    left: 193,
    paddingRight: 120,
    marginTop:  -18,
  },
  subtitleText11belowright: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#000',
    left: 197.5,
    paddingRight: 120,
    top: 6.5,
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
  direction1: {
    position: 'absolute',
    top: 341.2,
    right: 101,
    width: 7,
    height: 9.5,
  },
  direction2: {
    position: 'absolute',
    top: 345,
    left: 238,
    width: 14,
    height: 8,
  },
  rate1: {
    position: 'absolute',
    top: 40,
    left: 25,
    width: 72,
    height: 72,
  },
  camera: {
    position: 'absolute',
    top: 142,
    left: 40,
    width: 20,
    height: 20,
  },
  subway: {
    position: 'absolute',
    top: 180,
    left: 35,
    width: 28,
    height: 28,
  },
  plane: {
    position: 'absolute',
    top: 220,
    left: 35,
    width: 31,
    height: 31,
  },
  car1: {
    position: 'absolute',
    top: 128,
    left: 280,
    width: 17,
    height: 17,
  },
  car2: {
    position: 'absolute',
    top: 273,
    left: 275,
    width: 17,
    height: 17,
  },
  anhR1: {
    position: 'absolute',
    top: 32,
    left: 15,
    width: 100,
    height: 110,
  },
  anhR2: {
    position: 'absolute',
    top: 180,
    left: 15,
    width: 100,
    height: 109,
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
  star2: {
    width: 17,
    height: 17,
    top: -13.5,
    left: -43,
  },
  star3: {
    width: 17,
    height: 17,
    top: -14,
    left: -43,
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
  starTextRight2: {
    position: 'absolute',
    left: 152,
    top: 128,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
  },
  starTextRight3: {
    position: 'absolute',
    left: 152,
    top: 273,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
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
  line1: {
    position: 'absolute',
    top: '110%',
    left: 0,
    width: '100%',
    height: 1,
    backgroundColor: '#EBF1F5',
  },
  line2: {
    position: 'absolute',
    top: '99.5%',
    left: 0,
    width: '100%',
    height: 1,
    backgroundColor: '#EBF1F5',
  },
  line3: {
    position: 'absolute',
    top: '53.5%',
    left: 0,
    width: '100%',
    height: 1,
    backgroundColor: '#EBF1F5',
  },
  line4: {
    position: 'absolute',
    top: '102.6%',
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
});

export default Nearby;
