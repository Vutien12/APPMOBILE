import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavigationMenu from '../components/NavigationMenu';

const initialItems = [
  {
    key: '1',
    name: 'Heden golf',
    rating: 3.9,
    reviews: 200,
    description: 'Set in landscaped gardens overlooking the ...',
    discount: '25% OFF',
    price: 127,
    image: require('../assets/Heden.png'),
  },
  {
    key: '2',
    name: 'Onomo',
    rating: 4.3,
    reviews: 150,
    description: 'Adagio City Aparthotel is a joint venture ...',
    discount: '15% OFF',
    price: 120,
    image: require('../assets/Onomo.png'),
  },
  {
    key: '3',
    name: 'Adagio',
    rating: 4.5,
    reviews: 20,
    description: 'The ONOMO Hotels chain established...',
    discount: '15% OFF',
    price: 100,
    image: require('../assets/Adagio.png'),
  },
  {
    key: '4',
    name: 'Sofitel',
    rating: 4.5,
    reviews: 20,
    description: 'This understated hotel is 5 km from both...',
    discount: '20% OFF',
    price: 127,
    image: require('../assets/Sotitel.png'),
  },
];

const Screen2 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  const addItemToCart = (price) => {
    setCartItems(prevItems => [...prevItems, price]);
    // Optionally, you can display a message or update state for the cart
  };

  const renderItem = ({ item, index }) => (
    <View>
      <View style={styles.itemContainer}>
        <Image source={item.image} style={styles.itemImage} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>{item.name}</Text>
          <View style={styles.ratingContainer}>
            <View style={styles.starContainer}>
              <Icon name="star" size={12} color="#FFD700" />
            </View>
            <Text style={styles.itemRating}>{item.rating}</Text>
            <Text style={styles.itemReviews}>Reviews ({item.reviews})</Text>
          </View>
          <Text style={styles.itemDescription}>{item.description}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.itemDiscount}>{item.discount}</Text>
            <Text style={styles.itemPrice}>${item.price}</Text>
            <TouchableOpacity style={styles.addButton} onPress={() => addItemToCart(item.price)}>
              <Text style={styles.addButtonText}>Book now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {index < initialItems.length && <View style={styles.line} />}
    </View>
  );

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



      {/* Item List */}
      <FlatList
        data={initialItems}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        style={styles.list}
      />
      {/* Thêm NavigationMenu vào cuối màn hình */}
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
  marginLeft:'auto'
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C4C4C4',
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
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#C4C4C4',
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
  list: {
    marginBottom: 80,
  },
  line: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginVertical: 8,
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 0,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  itemImage: {
    width: 100,
    height: 80,
    borderRadius: 8,
  },
  itemName: {
    fontSize: 12.5,
    fontWeight: '700',
  },
  itemDescription: {
    fontSize: 11,
    color: 'black',
  },
  itemDiscount: {
    fontSize: 14,
    color: '#EBA731',
    fontWeight: '700',
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: '700',
    left:15
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    marginTop: 8,
  },
  itemRating: {
    fontSize: 10,
    color: '#888',
    marginLeft: 5,
  },
  itemReviews: {
    fontSize: 12,
    color: '#888',
    marginLeft: 20,
  },
  addButton: {
    backgroundColor: '#00C8CA',
    borderRadius: 10,
    paddingVertical: 3,
    paddingHorizontal: 12,
    marginLeft: 35,
  },
  addButtonText: {
    color: '#fff',
  },
});

export default Screen2;
