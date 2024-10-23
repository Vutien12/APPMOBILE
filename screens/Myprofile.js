import React from 'react';
import { View, ImageBackground, StyleSheet, Text, Dimensions, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Cần cài đặt thư viện này: react-native-vector-icons
import NavigationMenu from '../components/NavigationMenu'; // Import NavigationMenu vào file hiện tại
import Card from '../components/Card';

const Screen36 = () => {
  const screenHeight = Dimensions.get('window').height; // Lấy chiều cao màn hình

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/anhnen.png')}
        style={[styles.background, { height: screenHeight * 0.55 }]} // Chiều cao ảnh nền bằng 55% chiều cao màn hình
      >
        <View style={styles.infoContainer}>
          <Text style={styles.nameText}>John Smith</Text>
          <Text style={styles.emailText}>johnsmith@gmail.com</Text>
          <Text style={styles.phoneText}>+225 698698966</Text>
          <TouchableOpacity style={styles.editButton}>
            <Icon name="edit" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      {/* Thêm ảnh bên dưới */}
      <Image
        source={require('../assets/Component.png')} // Thay yourImage.png bằng tên ảnh bạn muốn thêm
        style={styles.image}
      />

      {/* Nút thêm mới không có khung */}
      <TouchableOpacity>
        <Text style={styles.addButtonText}>+ ADD NEW CART</Text>
      </TouchableOpacity>

      {/* Thêm NavigationMenu vào cuối màn hình */}
      <NavigationMenu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Đặt nội dung lên đầu màn hình
    alignItems: 'center',
  },
  background: {
    width: '100%',
    justifyContent: 'flex-end', // Đặt nội dung xuống cuối ảnh nền
    alignItems: 'center', // Căn giữa nội dung theo chiều ngang
    paddingBottom: 0, // Khoảng cách từ khung nhập đến đáy của ảnh nền
  },
  infoContainer: {
    backgroundColor: '#ffffff', // Màu nền trắng mờ để hiển thị rõ hơn
    padding: 20,
    borderRadius: 15,
    width: '85%', // Chiều rộng khung nhập chiếm 90% màn hình
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    top: 20,
  },
  nameText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  emailText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  phoneText: {
    fontSize: 16,
    color: '#555',
  },
  editButton: {
    position: 'absolute',
    top: -15, // Đặt nút chỉnh sửa lên trên
    right: -15, // Đặt nút chỉnh sửa sang bên phải
    backgroundColor: '#4CAF50', // Màu xanh của nút chỉnh sửa
    borderRadius: 30,
    padding: 10,
    elevation: 5, // Tạo đổ bóng cho Android
  },
  image: {
    width: '90%', // Chiều rộng của ảnh
    height: 200, // Chiều cao của ảnh
    resizeMode: 'cover', // Cách thu phóng ảnh
    marginTop: 30, // Khoảng cách giữa ảnh nền và ảnh bên dưới
    borderRadius: 20,
  },
  addButtonText: {
    color: '#0090FF', // Màu chữ
    fontSize: 18, // Kích thước chữ
    fontWeight: '400', // Đậm chữ
    marginTop: 20, // Khoảng cách từ ảnh đến nút
  },
});

export default Screen36;
