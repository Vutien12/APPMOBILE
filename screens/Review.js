import React, { useState } from 'react';
import { 
  Image, 
  ImageBackground, 
  StyleSheet,
  SafeAreaView, 
  Text, 
  View, 
  ScrollView, 
  TouchableOpacity, 
  Modal,
} from 'react-native';
import Swiper from 'react-native-swiper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

// Image imports
const muiTen = require('../assets/muiten.png');
const closeIcon = require('../assets/+.png');
const anhnen = require('../assets/heden.jpg');
const map = require('../assets/map.png');
const star = require('../assets/Star.png');
const share = require('../assets/share.png');
const line = require('../assets/Line.png');
const gym = require('../assets/gym.png');
const food = require('../assets/food.png');
const kid = require('../assets/kid.png');
const wifi = require('../assets/wifi.png');
const location = require('../assets/location.png');
const phone = require('../assets/phone.png');
const calendar = require('../assets/calendar.png');

const pool = require('../assets/pool.png');
const diningtable = require('../assets/dining-table.png');
const diamond = require('../assets/diamond.png');
const bed = require('../assets/bed.png');
const pawprint = require('../assets/pawprint.png');
const nha = require('../assets/nha.png');
const banh1 = require('../assets/banh1.png');
const banh2 = require('../assets/banh2.png');
const banh3 = require('../assets/banh3.png');
const banh4 = require('../assets/banh4.png');

const Review = () => {
  const [activeButton, setActiveButton] = useState('Review');
  const [modalVisible, setModalVisible] = useState(false);
  const [checkinDate, setCheckinDate] = useState(null);
  const [checkoutDate, setCheckoutDate] = useState(null);
  const [isCheckinPickerVisible, setCheckinPickerVisibility] = useState(false);
  const [isCheckoutPickerVisible, setCheckoutPickerVisibility] = useState(false);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(0);
  const [isGuestsVisible, setIsGuestsVisible] = useState(false); // Toggle for showing the guest section

  // Hiển thị bộ chọn ngày giờ cho Checkin
  const showCheckinPicker = () => {
    setCheckinPickerVisibility(true);
  };

  // Hiển thị bộ chọn ngày giờ cho Checkout
  const showCheckoutPicker = () => {
    setCheckoutPickerVisibility(true);
  };

  // Xử lý khi chọn Checkin date
  const handleCheckinConfirm = (date) => {
    setCheckinDate(date);
    setCheckinPickerVisibility(false);
  };

  // Xử lý khi chọn Checkout date
  const handleCheckoutConfirm = (date) => {
    setCheckoutDate(date);
    setCheckoutPickerVisibility(false);
  };
  const handleIncrement = (type) => {
    if (type === 'adults') setAdults(adults + 1);
    if (type === 'children') setChildren(children + 1);
    if (type === 'rooms') setRooms(rooms + 1);
  };

  const handleDecrement = (type) => {
    if (type === 'adults' && adults > 0) setAdults(adults - 1);
    if (type === 'children' && children > 0) setChildren(children - 1);
    if (type === 'rooms' && rooms > 0) setRooms(rooms - 1);
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
                if (label === 'Review (106)') {
                  setModalVisible(true); 
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
      <SafeAreaView style={{ flex:1, marginTop: -110 }}> 
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
        {/* Title and Subtitle below the line */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>HOTEL DESCRIPTION</Text>
        <Text style={styles.subtitleText}>Set in landscaped gardens overlooking the Ébrié lagoon, 
          this upscale hotel featuring contemporary local art and architectural touches is 3 km from Mosquée de la riviéra and 17 km from 
          Banco National Park.
        </Text>
        <Image source={line} style={styles.line1} />
        <Text style={styles.titleText1}>HOTEL FACILITIES</Text>
        <Image source={wifi} style={styles.wifi} />
        <Text style={styles.subtitleText1}>Free Wi-Fi</Text>
        <Image source={gym} style={styles.gym} />
        <Text style={styles.subtitleText2}>Fitness Center</Text>
        <Image source={food} style={styles.food} />
        <Text style={styles.subtitleText3}>Free Breakfast</Text>
        <Image source={kid} style={styles.kid} />
        <Text style={styles.subtitleText4}>Kid Friendly</Text>
      </View>
      <View style={styles.titleContainer}>
      <Image source={location} style={styles.location} />
        <Text style={styles.subText1}>Abidjan, Côte d'Ivoire</Text>
        <Image source={phone} style={styles.phone} />
        <Text style={styles.subText2}>+225 22 48 26 26</Text>
        <Image source={calendar} style={styles.calendar1} />
        <Text style={styles.subText3}>Checkin 12 PM</Text>
        <Image source={calendar} style={styles.calendar2} />
        <Text style={styles.subText4}>Checkout 11 AM</Text>
        <Image source={line} style={styles.line2} />
      </View>
      <View style={styles.titleContainer}>
      <Image source={diningtable} style={styles.diningtable} />
        <Text style={styles.subText5}>Great dining</Text>
        <Image source={pawprint} style={styles.pawprint} />
        <Text style={styles.subText6}>Pet friendly</Text>
        <Image source={food} style={styles.food1} />
        <Text style={styles.subText7}>Great breakfast</Text>
        <Image source={bed} style={styles.bed} />
        <Text style={styles.subText8}>Great rooms</Text>
        <Image source={pool} style={styles.pool} />
        <Text style={styles.subText9}>Great pool</Text>
        <Image source={diamond} style={styles.diamond} />
        <Text style={styles.subText10}>Luxurious vibe</Text>
        <Image source={line} style={styles.line3} />
      </View>
      <View style={styles.titleContainer}>
      <Text style={styles.titleText2}>CHECK AVAILABILITY</Text>
      <View style={styles.container}>
      {/* Checkin Date & Time */}
      <TouchableOpacity onPress={showCheckinPicker}>
      <Image source={calendar} style={styles.calendar3} />
        <Text style={styles.subText11}>
          Checkin date & time {checkinDate ? checkinDate.toLocaleString() : ''}
        </Text>
      </TouchableOpacity>
      <Image source={line} style={styles.line4} />

      <DateTimePickerModal
        isVisible={isCheckinPickerVisible}
        mode="datetime"
        onConfirm={handleCheckinConfirm}
        onCancel={() => setCheckinPickerVisibility(false)}
      />

      {/* Checkout Date & Time */}
      <TouchableOpacity onPress={showCheckoutPicker}>
      <Image source={calendar} style={styles.calendar4} />
        <Text style={styles.subText12}>
          Checkout date & time {checkoutDate ? checkoutDate.toLocaleString() : ''}
        </Text>
      </TouchableOpacity>
      <Image source={line} style={styles.line5} />

      <DateTimePickerModal
        isVisible={isCheckoutPickerVisible}
        mode="datetime"
        onConfirm={handleCheckoutConfirm}
        onCancel={() => setCheckoutPickerVisibility(false)}
      />
    </View>
    {/* Guests and Rooms */}
    <View style={styles.inputContainer}>
        <FontAwesome name="users" size={12} color="#0090FF" top={58} left={-42.5}/>
        <TouchableOpacity onPress={() => setIsGuestsVisible(!isGuestsVisible)}>
          <Text style={styles.text}>{adults} Adults. {children} Children. {rooms} Room</Text>
        </TouchableOpacity>
        <Image source={nha} style={styles.nha} />
        <Image source={line} style={styles.line6} />
      </View>
      <View style={styles.titleContainer}>
      <Image source={line} style={styles.line7} />
      <Text style={styles.titleText3}>FOOD</Text>
      <Text style={styles.titleText4}>VIEW</Text>
      <Image source={banh1} style={styles.banh1} />
      <Image source={banh2} style={styles.banh2} />
      <Image source={banh3} style={styles.banh3} />
      <Image source={banh4} style={styles.banh4} />
      <Text style={styles.subText13}>Bagels with {'\n'}turkey and ...</Text>
      <Text style={styles.subText14}>gourmet croissant,{'\n'} scrambled eggs..</Text>
      <Text style={styles.subText15}>sandwich</Text>
      <Text style={styles.subText16}>crispy mozza{'\n'} burger</Text>
      <Image source={line} style={styles.line8} />
      </View>
      {/* Guests Dropdown */}
      {isGuestsVisible && (
        <View style={styles.guestDropdownContainer}>
          <View style={styles.guestRow}>
            <Text style={styles.guestLabel}>Adults</Text>
            <TouchableOpacity onPress={() => handleDecrement('adults')}><Text style={styles.control}>-</Text></TouchableOpacity>
            <Text style={styles.guestCount}>{adults}</Text>
            <TouchableOpacity onPress={() => handleIncrement('adults')}><Text style={styles.control}>+</Text></TouchableOpacity>
          </View>
          <View style={styles.guestRow}>
            <Text style={styles.guestLabel}>Children</Text>
            <TouchableOpacity onPress={() => handleDecrement('children')}><Text style={styles.control}>-</Text></TouchableOpacity>
            <Text style={styles.guestCount}>{children}</Text>
            <TouchableOpacity onPress={() => handleIncrement('children')}><Text style={styles.control}>+</Text></TouchableOpacity>
          </View>
          <View style={styles.guestRow}>
            <Text style={styles.guestLabel}>Rooms</Text>
            <TouchableOpacity onPress={() => handleDecrement('rooms')}><Text style={styles.control}>-</Text></TouchableOpacity>
            <Text style={styles.guestCount}>{rooms}</Text>
            <TouchableOpacity onPress={() => handleIncrement('rooms')}><Text style={styles.control}>+</Text></TouchableOpacity>
          </View>
        </View>)}
  
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
    textAlign: 'center',
  },
  subtitleText: {
    fontSize: 10.5,
    color: '#000',
    left: 13.5,
    paddingRight: 24.5,
    textAlign: 'center',
    marginTop: 5,
  },
  titleText1: {
    top: 24,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  subtitleText1: {
    fontSize: 10.5,
    color: '#000',
    left: -138,
    marginTop: 5,
    top: 50,
  },
  subtitleText2: {
    fontSize: 10.5,
    color: '#000',
    left: -55,
    marginTop: 5,
    top: 28,
  },
  subtitleText3: {
    fontSize: 10.5,
    color: '#000',
    left: 40,
    marginTop: 5,
    top: 6,
  },
  subtitleText4: {
    fontSize: 10.5,
    color: '#000',
    left: 130,
    marginTop: 5,
    top: -16,
  },
  subText1: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#000',
    left: -40,
    paddingRight: 24.5,
    top: -10,
  },
  subText2: {
    fontSize: 14,
    color: '#000',
    left: -66,
    top: 10,
    fontWeight: 'normal',
  },
  subText3: {
    fontSize: 14,
    color: '#000',
    left: -74.5,
    fontWeight: 'normal',
    top: 29,
  },
  subText4: {
    fontSize: 14,
    color: '#000',
    left: 108,
    fontWeight: 'normal',
    top: 7,
  },
  subText5: {
    fontSize: 10,
    color: '#000',
    left: -100,
    marginTop: 5,
    top: 15,
  },
  subText6: {
    fontSize: 10,
    color: '#000',
    left: 20,
    marginTop: 5,
    top: -6,
  },
  subText7: {
    fontSize: 10,
    color: '#000',
    left: -90,
    marginTop: 5,
    top: 20,
  },
  subText8: {
    fontSize: 10,
    color: '#000',
    left: 130,
    marginTop: 5,
    top: -48,
  },
  subText9: {
    fontSize: 10,
    color: '#000',
    left: 17,
    marginTop: 5,
    top: -21,
  },
  subText10: {
    fontSize: 10,
    color: '#000',
    left: 135,
    marginTop: 5,
    top: -43,
  },
  subText11: {
    fontSize: 13,
    color: '#000',
    left: -50,
    marginTop: 5,
    top: -2,
  },  
  subText12: {
    fontSize: 13,
    color: '#000',
    left: -50,
    marginTop: 5,
    top: 24,
  },
  subText13: {
    fontSize: 9,
    color: '#000',
    left: -125,
    marginTop: 5,
    top: -170,
  },
  subText14: {
    fontSize: 9,
    color: '#000',
    left: -12,
    marginTop: 5,
    top: -201,
  },
  subText15: {
    fontSize: 9,
    color: '#000',
    left: 70,
    marginTop: 5,
    top: -233,
  },
  subText16: {
    fontSize: 9,
    color: '#000',
    left: 172,
    marginTop: 5,
    top: -253,
  },
  titleText2: {
    top: -34,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    left: -68,
  },
  titleText3: {
    top: 68,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    left: -134,
  },
  titleText4: {
    top: 43,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0090FF',
    left: 140,
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
  wifi: {
    position: 'absolute',
    top: 145,
    left: 30,
    width: 26.76,
    height: 22,
  },
  gym: {
    position: 'absolute',
    top: 147,
    left: 107,
    width: 38.34,
    height: 19.92,
  },
  nha: {
    position: 'absolute',
    top: 50,
    left: -52,
    width: 16,
    height: 20.44,
  },
  banh1: {
    top: 60,
    left: -115,
    width: 90,
    height: 77,
  },
  banh2: {
    top: -16,
    left: -15,
    width: 90,
    height: 77,
  },
  banh3: {
    top: -93,
    left: 185,
    width: 90,
    height: 77,
  },
  banh4: {
    top: -170,
    left: 85,
    width: 90,
    height: 77,
  },
  food: {
    position: 'absolute',
    top: 142,
    left: 202.5,
    width: 36,
    height: 28.8,
  },
  kid: {
    position: 'absolute',
    top: 140.5,
    left: 299,
    width: 31,
    height: 31,
  },
  location: {
    position: 'absolute',
    top: -10,
    left: 20,
    width: 15.5,
    height: 21.74,
  },
  phone: {
    position: 'absolute',
    top: 35,
    left: 22,
    width: 8,
    height: 19,
  },
  calendar1: {
    position: 'absolute',
    top: 75,
    left: 19,
    width: 15.5,
    height: 16.49,
  },
  calendar2: {
    position: 'absolute',
    top: 75,
    left: 200,
    width: 15.5,
    height: 16.49,
  },
  calendar3: {
    position: 'absolute',
    top: 3,
    left: -74,
    width: 15.5,
    height: 16.49,
  },
  calendar4: {
    position: 'absolute',
    top: 30,
    left: -74,
    width: 15.5,
    height: 16.49,
  },
  diningtable: {
    position: 'absolute',
    top: 13,
    left: 19,
    width: 22,
    height: 23,
  },
  food1: {
    position: 'absolute',
    top: 68,
    left: 22,
    width: 15.5,
    height: 12.5,
  },
  pawprint: {
    position: 'absolute',
    top: 21,
    left: 150,
    width: 11,
    height: 13.5,
  },
  bed: {
    position: 'absolute',
    top: 19.5,
    left: 254,
    width: 15,
    height: 15,
  },
  pool: {
    position: 'absolute',
    top: 67,
    left: 148,
    width: 15,
    height: 15,
  },
  diamond: {
    position: 'absolute',
    top: 64,
    left: 254,
    width: 15,
    height: 16,
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
    height: 2,
    backgroundColor: '#EBF1F5',
  },
  line1: {
    position: 'absolute',
    top: '52%',
    left: 0,
    width: '100%',
    height: 90,
    backgroundColor: '#E0E8ED',
  },
  line2: {
    position: 'absolute',
    top: '126%',
    left: 0,
    width: '100%',
    height: 2,
    backgroundColor: '#EBF1F5',
  },
  line3: {
    position: 'absolute',
    top: '80%',
    left: 0,
    width: '100%',
    height: 2,
    backgroundColor: '#EBF1F5',
  },
  line4: {
    position: 'absolute',
    top: '52%',
    left: -74,
    width: '100%',
    height: 2,
    backgroundColor: '#C4C4C4',
  },
  line5: {
    position: 'absolute',
    top: '155%',
    left: -74,
    width: '100%',
    height: 2,
    backgroundColor: '#C4C4C4',
  },
  line6: {
    position: 'absolute',
    top: '230%',
    left: -53,
    width: '100%',
    height: 2,
    backgroundColor: '#C4C4C4',
  },
  line7: {
    position: 'absolute',
    top: '12%',
    left: -130,
    width: '100%',
    height: 2,
    backgroundColor: '#EBF1F5',
  },
  line8: {
    position: 'absolute',
    top: '50%',
    left: -140,
    width: '120%',
    height: 2,
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
    marginTop: -100,
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

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  selectionBox: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  columnHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  columnHeader: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  columnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scrollList: {
    flex: 1,
    marginHorizontal: 5,
    height: 150,  // Adjust the height as needed
  },
  option: {
    padding: 10,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 18,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  guestDropdownContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    top: -450,
  },
  guestRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },
  guestLabel: {
    fontSize: 13,
  },
  guestCount: {
    fontSize: 13,
  },
  text: {
    top: 40,
    left: -28,
    fontSize: 13,
  },

});

export default Review;