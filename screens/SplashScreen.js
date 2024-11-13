import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function SplashScreen() {
  const navigation = useNavigation(); // Sử dụng hook để điều hướng

  // Hàm xử lý sự kiện khi nhấn vào nút "Next"
  const handleNextPress = () => {
    navigation.navigate('LoginScreen'); // Chuyển sang màn hình LoginScreen
  };

  return (
    <TouchableOpacity style={styles.container} activeOpacity={1}>
      <LinearGradient
        colors={['#00FF94', '#0000FE']}
        style={styles.background}
      >
        <View style={styles.content}>
          <Image 
            source={require('../assets/location.png')} 
            style={styles.icon} 
          />
          <Text style={styles.title}>Find Hotel</Text>
          <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
            <Text style={styles.nextText}>→</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Chiếm toàn bộ màn hình
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  icon: {
    width: 200, // Điều chỉnh lại kích thước icon
    height: 200,
    resizeMode: 'contain', // Giữ tỉ lệ ảnh
    marginBottom: 10, // Thêm khoảng cách dưới hình ảnh
  },
  title: {
    fontSize: 40, // Điều chỉnh kích thước chữ
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Arial',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  nextButton: {
    marginTop: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
});
