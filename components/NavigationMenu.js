import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';

// Mảng chứa thông tin về icon, gồm đường dẫn và kích thước
const icons = [
  { source: require('../assets/hotel.png'), size: 20 },
  { source: require('../assets/car.png'), size: 20 },
  { source: require('../assets/Vector1.png'), size: 20 },
  { source: require('../assets/avticon.png'), size: 20 },
  { source: require('../assets/setiing.png'), size: 20 },
];

// Tên tương ứng với từng icon
const iconLabels = ['Rooms', 'Car Booking', 'Car Washing', 'My Profile', 'Settings'];

const NavigationMenu = ({ backgroundColor = '#00C8CA' }) => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  // Hàm xử lý khi nhấn vào icon
  const handleIconPress = (index) => {
    setSelectedIcon(index);
    console.log(`Icon ${index + 1} pressed`);
    // Thực hiện hành động điều hướng tại đây
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {icons.map((icon, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleIconPress(index)}
          style={styles.iconContainer}
        >
          <Image
            source={icon.source}
            style={[
              styles.icon,
              { width: icon.size, height: icon.size },
              selectedIcon === index && styles.selectedIcon, // Đổi màu icon khi được chọn
            ]}
          />
          <Text
            style={[
              styles.iconLabel,
              selectedIcon === index && styles.selectedIconLabel, // Đổi màu chữ khi được chọn
            ]}
          >
            {iconLabels[index]}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute', // Đặt khung ở vị trí tuyệt đối
    bottom: 0, // Đặt ở cuối màn hình
    left: 0,
    right: 0,
    height: 60, // Chiều cao cố định của khung chứa để đủ chỗ cho tên dưới mỗi icon
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  iconContainer: {
    alignItems: 'center',
  },
  icon: {
    resizeMode: 'contain', // Đảm bảo icon giữ tỷ lệ khi thay đổi kích thước
    tintColor: '#00003D80', // Màu mặc định của icon
  },
  selectedIcon: {
    tintColor: '#FFFFFF', // Màu trắng khi icon được chọn
  },
  iconLabel: {
    marginTop: 2, // Khoảng cách giữa icon và tên
    fontSize: 12, // Kích thước chữ của tên icon
    color: '#00003D80', // Màu sắc mặc định của tên icon
  },
  selectedIconLabel: {
    color: '#FFFFFF', // Màu trắng khi tên icon được chọn
  },
});

export default NavigationMenu;
