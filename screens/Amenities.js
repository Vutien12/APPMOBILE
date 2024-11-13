import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavigationMenu from '../components/NavigationMenu';

const images = [
  { key: '1', name: 'Free Wi-Fi', image: require('../assets/wifi.png') },
  { key: '2', name: 'Fitness Center', image: require('../assets/barbell.png') },
  { key: '3', name: 'Free Breakfast', image: require('../assets/breakfast1.png') },
  { key: '4', name: 'Kid Friendly', image: require('../assets/pushchair.png') },
  { key: '5', name: 'Free Parking', image: require('../assets/parking.png') },
  { key: '6', name: 'Pet Friendly', image: require('../assets/pawprint.png') },
  { key: '7', name: 'Air Conditioned', image: require('../assets/air-conditioner.png') },
  { key: '8', name: 'Pool', image: require('../assets/swimming.png') },
  { key: '9', name: 'Bar', image: require('../assets/beer.png') },
  { key: '10', name: 'Restaurant', image: require('../assets/salad.png') },
];

const Screen13 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [buttonPressed, setButtonPressed] = useState('');

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  const applyFilters = () => {
    console.log('Filters applied!');
  };

  const renderImageItem = ({ item }) => (
    <View style={styles.imageWrapper}>
      <Image source={item.image} style={styles.imageIcon} resizeMode="contain" />
      <Text style={styles.imageName}>{item.name}</Text>
    </View>
  );

  const handleButtonPress = (button) => {
    setButtonPressed(button);
    // Gọi hàm tương ứng
    if (button === 'clear') {
      clearSearch();
    } else if (button === 'apply') {
      applyFilters();
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Khách sạn</Text>
        <Image source={require('../assets/Dinhvi.png')} style={styles.headerImage} />
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Icon name="search" size={20} color="#0090FF" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Tìm kiếm"
          value={searchQuery}
          onChangeText={handleSearch}
        />
        {searchQuery ? (
          <TouchableOpacity onPress={clearSearch} style={styles.xmarkIcon}>
            <Icon name="times" size={20} color="#0090FF" />
          </TouchableOpacity>
        ) : null}
      </View>

      {/* Filters: Amenities, Filter by, Sort by */}
      <View style={styles.filtersContainer}>
        {['Tiện ích', 'Lọc theo', 'Sắp xếp'].map((filter, index) => (
          <TouchableOpacity key={index} style={styles.filterItem} onPress={() => {/* Xử lý sự kiện khác nếu cần */}}>
            <Text style={styles.filterText}>{filter}</Text>
            <Icon name="chevron-down" size={16} color="#000" />
          </TouchableOpacity>
        ))}
      </View>

      {/* Khung bao bọc phần hiển thị ảnh và nút */}
      <View style={styles.wrapper}>
        {/* Hiển thị danh sách ảnh trong 2 khung trên mỗi hàng */}
        <View style={styles.imageListContainer}>
          <FlatList
            data={images}
            renderItem={renderImageItem}
            keyExtractor={(item) => item.key}
            numColumns={2}
            columnWrapperStyle={styles.row}
          />
        </View>

        {/* Thêm dòng phân cách */}
        <View style={styles.divider} />

        {/* Buttons: Clear and Apply */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            onPress={() => handleButtonPress('clear')} 
            style={[styles.clearButton, buttonPressed === 'clear' && styles.pressedButton]}>
            <Text style={[styles.buttonText, buttonPressed === 'clear' && styles.pressedButtonText]}>Clear</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => handleButtonPress('apply')} 
            style={[styles.applyButton, buttonPressed === 'apply' && styles.pressedButton]}>
            <Text style={[styles.buttonText, buttonPressed === 'apply' && styles.pressedButtonText]}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Thêm NavigationMenu nếu cần */}
      <NavigationMenu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  headerImage: {
    marginLeft: 'auto',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EBF1F5',
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    marginLeft: 10,
  },
  searchIcon: {
    marginRight: 5,
  },
  xmarkIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 0,
    borderBottomWidth: 0,
    borderBottomColor: '#EBF1F5',
    paddingBottom: 10,
  },
  filterItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    padding: 0,
    marginHorizontal: 20,
  },
  filterText: {
    fontSize: 15,
    color: '#000',
    fontWeight: '400',
    marginRight: 5,
  },
  wrapper: {
    padding: 15,
    borderRadius: 0,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    right: 19,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    width: '112%',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 0,
    marginTop: 15
  },
  clearButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    flex: 1,
    marginRight: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#0090FF',
  },
  applyButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    flex: 1,
    marginLeft: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#0090FF',
  },
  buttonText: {
    color: '#0090FF',
    fontWeight: '400',
  },
  pressedButton: {
    backgroundColor: '#00C8CA', // Màu nền mới khi nhấn
    borderColor:"#00C8CA"
  },
  pressedButtonText: {
    color: '#FFFFFF', // Màu chữ mới khi nhấn
  },
  imageListContainer: {
    marginBottom: 10,
  },
  imageWrapper: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff', // Đặt nền màu trắng
    borderRadius: 10,
    borderWidth: 1, // Thêm viền
    borderColor: '#0090FF', 
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.5,
    elevation: 2, // Để tạo bóng cho khung trên Android
    width: '48%', // Đặt độ rộng của mỗi khung
    height: 65, // Tăng chiều cao của khung để hiện đủ ảnh
    marginBottom: 10, // Khoảng cách giữa các khung
    marginHorizontal: 4, // Khoảng cách giữa hai cột
  },
  imageIcon: {
    width: '100%', // Kích thước ảnh icon sẽ tự động điều chỉnh
    height: '50%', // Tỷ lệ chiều cao cho ảnh
  },
  imageName: {
    marginTop: 5,
    fontWeight: '300',
    color: '#000',
    textAlign: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#EBF1F5',
    marginVertical: 10,
  },
});

export default Screen13;
