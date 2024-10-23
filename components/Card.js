import React, { useState } from 'react';
import { View, Image, StyleSheet, TextInput, Text } from 'react-native';

const Card = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState(''); // Thêm trạng thái cho CVV

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
    <View style={styles.cardContainer}>
      {/* Ảnh nền */}
      <Image 
        source={require('../assets/nencard.png')}
        style={styles.atmImage} 
      />
      {/* Ảnh ở góc trái */}
      <Image 
        source={require('../assets/team.png')} 
        style={styles.leftImage} 
      />
      {/* Ảnh ở góc phải */}
      <Image 
        source={require('../assets/visa-pay-logo.png')} 
        style={styles.rightImage} 
      />
      {/* Ảnh nằm đè lên ảnh góc trái 1 */}
      <Image 
        source={require('../assets/Vector 2.png')} 
        style={styles.overlayImage1} 
      />
      {/* Ảnh nằm đè lên ảnh góc trái 2 */}
      <Image 
        source={require('../assets/Vector 2.1.png')} 
        style={styles.overlayImage2} 
      />
      
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
              onChangeText={formatExpiryDate} // Gọi hàm formatExpiryDate khi có thay đổi
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
              value={cvv} // Thiết lập giá trị cho CVV
              onChangeText={handleCvvChange} // Gọi hàm handleCvvChange
              placeholderTextColor="#ffffff" 
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '95%',
    height: 200,
    backgroundColor: 'transparent',
    borderRadius: 10,
    elevation: 0,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    position: 'relative', // Cho phép position absolute cho các ảnh chồng lên
    right: 10,
  },
  atmImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  leftImage: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 37,
    height: 30,
    resizeMode: 'contain',
  },
  rightImage: {
    position: 'absolute',
    top: 10,
    right: 20,
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  overlayImage1: {
    position: 'absolute',
    top: 22,
    left: 33,
    width: 20,
    height: 25,
    resizeMode: 'contain',
  },
  overlayImage2: {
    position: 'absolute',
    top: 22,
    left: 22,
    width: 20,
    height: 25,
    resizeMode: 'contain',
  },
  formContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: 'flex-start', // Căn chỉnh các trường nhập
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
  },
  input: {
    width: '100%',
    height: 20,
    borderBottomColor: '#ffffff', // Màu đường line
    borderBottomWidth: 1,
    marginBottom: 6,
    color: '#ffffff', // Màu chữ trong input
  },
});

export default Card;
