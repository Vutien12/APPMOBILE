import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Card from '../components/Card'; // Đảm bảo đường dẫn đúng đến Card.js

const Screen44 = () => {
  // Hàm xử lý khi nút "Add" được nhấn
  const handleAddPress = () => {
    Alert.alert("Button Pressed", "You pressed the Add button!");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Icon name="angle-left" size={40} color="black" />
        <Text style={styles.title}>Add New Card</Text>
      </View>
      
      {/* Thay thế ảnh ATM bằng component Card */}
      <Card />

      {/* Nút Add */}
      <TouchableOpacity style={styles.addButton} onPress={handleAddPress}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    marginTop: 20,
  
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginLeft: 10,
  },
  addButton: {
    backgroundColor: '#00C8CA', // Màu nền cho nút
    paddingVertical: 10, // Điều chỉnh chiều cao nút
    paddingHorizontal: 20, // Điều chỉnh chiều rộng nút
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 30, // Khoảng cách từ ảnh Card
  },
  addButtonText: {
    color: '#fff', // Màu chữ
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Screen44;
