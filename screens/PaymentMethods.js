import React from 'react';
import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useState } from 'react';

// Đường dẫn đến hình ảnh trong thư mục assets
const Muiten = require('../assets/Vector (1).png');
const Rectangle = require('../assets/Rectangle.png');
const paymentImage = require('../assets/payment.png');
const Rectangle21 = require('../assets/Rectangle 2.1.png');
const Rectangle2 = require('../assets/Rectangle 2.png');
const Rectangle22 = require('../assets/Rectangle 2.2.png');
const Rectangle23 = require('../assets/Rectangle 2.3.png');
const Rectangle24 = require('../assets/Rectangle 2.4.png');
const Rectangle3 = require('../assets/Rectangle 3.png');
const visa = require('../assets/visa-pay-logo.png');
const Vector21 = require('../assets/Vector 2.1.png');
const Vector2 = require('../assets/Vector 2.png');



const PaymentMethods = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const formatCardNumber = (text) => {
    const numericText = text.replace(/\D/g, '').slice(0, 16);
    const formattedText = numericText.replace(/(.{4})/g, '$1 ').trim();
    setCardNumber(formattedText);
  };

  const formatExpiryDate = (text) => {
    // Chỉ cho phép nhập số và tối đa 4 ký tự
    const numericText = text.replace(/\D/g, '').slice(0, 4);

    // Thêm dấu '/' sau 2 ký tự đầu tiên
    if (numericText.length > 2) {
      setExpiryDate(`${numericText.slice(0, 2)}/${numericText.slice(2)}`);
    } else {
      setExpiryDate(numericText);
    }
  };

  const handleCvvChange = (text) => {
    // Chỉ cho phép tối đa 3 ký tự
    const numericText = text.replace(/\D/g, '').slice(0, 3);
    setCvv(numericText);
  };

  return (
    <View style={styles.container}>
      {/* Text container with Muiten aligned to the right */}
      <View style={styles.textContainer}>
        {/* Image Rectangle before the text */}
        <Image source={Rectangle} style={styles.rectangle} />
        <Text style={styles.text}>Phương thức thanh toán</Text>
        <Image source={Muiten} style={styles.muitenImage} />
      </View>

      {/* Display all other images in a row above the payment image */}
      <View style={styles.rectangleRow}>
        <Image source={Rectangle2} style={styles.rectangle2} />
        <Image source={Rectangle21} style={styles.rectangle21} />
        <Image source={Rectangle22} style={styles.rectangle22} />
        <View style={styles.rectangle24Container}>
          <Image source={Rectangle24} style={styles.rectangle24} />
          <Image source={Rectangle23} style={styles.rectangle23} />
        </View>
      </View>

      {/* Main payment image */}
      <View style={styles.cardContainer}>
        <Image source={paymentImage} style={styles.paymentImage} />
        {/* Ảnh ở góc trái */}
        <Image source={require('../assets/Rectangle 3.png')} style={styles.leftImage} />
        {/* Ảnh ở góc phải */}
        <Image source={require('../assets/visa-pay-logo.png')} style={styles.rightImage} />
        {/* Ảnh nằm đè lên ảnh góc trái 1 */}
        <Image source={require('../assets/Vector 2.png')} style={styles.overlayImage1} />
        {/* Ảnh nằm đè lên ảnh góc trái 2 */}
        <Image source={require('../assets/Vector 2.1.png')} style={styles.overlayImage2} />

        {/* Form nhập liệu */}
        <View style={styles.formContainer}>
          <Text style={styles.label}>Card Number</Text>
          <TextInput
            style={styles.input}
            placeholder="0085 7789 2236 3685"
            keyboardType="numeric"
            value={cardNumber}
            onChangeText={formatCardNumber}
            placeholderTextColor="#ffffff"
          />

          <Text style={styles.label}>Card Holder Name</Text>
          <TextInput 
            style={styles.input} 
            placeholder="John Smith" 
            placeholderTextColor="#ffffff" 
          />

          {/* Nhóm các trường Expiry Date và CVV nằm ngang */}
          <View style={styles.rowContainer}>
            <View style={styles.halfWidth}>
              <Text style={styles.label}>Expiry Date</Text>
              <TextInput 
                style={styles.input} 
                placeholder="06/22" 
                keyboardType="numeric" 
                value={expiryDate}
                onChangeText={formatExpiryDate}
                placeholderTextColor="#ffffff" 
              />
            </View>
            <View style={styles.halfWidth}>
              <Text style={styles.label}>CVV</Text>
              <TextInput 
                style={styles.input} 
                placeholder="321" 
                keyboardType="numeric" 
                secureTextEntry 
                value={cvv}
                onChangeText={handleCvvChange}
                placeholderTextColor="#ffffff" 
              />
            </View>
          </View>
        </View>
      </View>

      {/* Finish Order Button */}
      <TouchableOpacity style={styles.button} onPress={() => alert('Yêu cầu thành công')}>
        <Text style={styles.buttonText}>Hoàn thành yêu cầu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align items at the top
    alignItems: 'flex-start', // Align items to the left
    padding: 16,
    marginTop: 20, // Move the entire layout down
  },
  rectangleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%', // Ensures full width usage for the row
    marginBottom: 10,
    marginTop: 10, // Add space above the row of images
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10, // Space below the text container
    width: '100%', // Ensure full width for alignment
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10, // Space between Rectangle and text
  },
  muitenImage: {
    width: 25, // Increased width of Muiten
    height: 15, // Increased height of Muiten
    resizeMode: 'contain',
    marginLeft: 'auto', // Push Muiten to the right
  },
  overlayImage1: {
    position: 'absolute',
    top: 31,
    left: 33,
    width: 20,
    height: 25,
    resizeMode: 'contain',
  },
  overlayImage2: {
    position: 'absolute',
    top: 31,
    left: 22,
    width: 20,
    height: 25,
    resizeMode: 'contain',
  },
  rightImage: {
    position: 'absolute',
    top: 19,
    right: 26,
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  leftImage: {
    position: 'absolute',
    top: 30,
    left: 20,
    width: 37,
    height: 30,
    resizeMode: 'contain',
  },
  paymentImage: {
    width: 341,
    height: 201,
    resizeMode: 'contain',
    alignSelf: 'center', // Center the payment image
    marginBottom: 20,
    left: -5, // Adjust margin for better spacing
    marginTop: 20, // Add margin to move the payment image down
  },
  rectangle: {
    width: 16, // Increased width of Rectangle
    height: 16, // Increased height of Rectangle
    resizeMode: 'contain',
  },
  rectangle21: {
    width: 71,
    height: 42,
    resizeMode: 'contain',
  },
  rectangle22: {
    width: 71,
    height: 42,
    resizeMode: 'contain',
  },
  rectangle23: {
    width: 39,
    height: 42,
    resizeMode: 'contain',
    position: 'absolute', // Positioning it inside Rectangle24
    top: 0, // Position it on top of Rectangle24
    left: '50%', // Center it horizontally
    marginLeft: -39 / 2, // Adjust to center it inside Rectangle24
  },
  rectangle24: {
    width: 71,
    height: 42,
    resizeMode: 'contain',
    position: 'relative', // To allow positioning of Rectangle23 inside it
  },
  rectangle2: {
    width: 71,
    height: 42,
    resizeMode: 'contain',
  },
  rectangle24Container: {
    position: 'relative', // To hold both Rectangle24 and Rectangle23
    alignItems: 'center', // Center Rectangle23 within Rectangle24
  },
  button: {
    backgroundColor: '#0090FF', // New color for the button
    padding: 12,
    borderRadius: 15, // Increased for more rounded corners
    alignItems: 'center',
    marginTop: 20, // Space above the button
    width: '100%', // Full width for the button
  },
  buttonText: {
    color: 'white', // New color for the button text
    fontSize: 16,
    fontWeight: 'normal',
  },
  input: {
    width: '86%',
    height: 20,
    borderBottomColor: '#ffffff', // Màu đường line
    borderBottomWidth: 1,
    marginBottom: 8,
    top: 0,
    left: 5,
    color: '#ffffff', // Màu chữ trong input
  },
  formContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: 'flex-start', // Căn chỉnh các trường nhập
    top: 65,
  },
  rowContainer: {
    flexDirection: 'row', // Đặt hướng cho các trường
    justifyContent: 'space-between', // Tạo khoảng cách giữa các trường
    width: '100%', // Đặt chiều rộng cho hàng
  },
  halfWidth: {
    width: '48%', // Chiều rộng cho mỗi trường
  },
  label: {
    color: '#ffffff', // Màu chữ
    fontSize: 12,
    marginBottom: 0,
    opacity: 0.5,
    left: 4,
  },
});

export default PaymentMethods;