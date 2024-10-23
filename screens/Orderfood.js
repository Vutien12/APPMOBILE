import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const cartIcon = require('../assets/feather-shopping-bag.png'); // Thay đổi đường dẫn đến ảnh của bạn
const foodItems = [
  { id: 1, name: 'Breakfast', image: require('../assets/breakfast.png') },
  { id: 2, name: 'Burger', image: require('../assets/burger.png') },
  { id: 3, name: 'Pizza', image: require('../assets/pizza.png') },
  { id: 4, name: 'Side items', image: require('../assets/side_items.png') },
  { id: 5, name: 'Chinese', image: require('../assets/chinese.png') },
  { id: 6, name: 'Salads', image: require('../assets/salads.png') },
];

const initialItems = [
  {
    key: '1',
    name: 'Bagels with turkey and bacon',
    rating: 3.9,
    reviews: 200,
    description: 'Neque, amet blandit tincidunt vulputate',
    discount: '25% OFF',
    price: 10,
    image: require('../assets/Rectangle 3.4.png'),
  },
  {
    key: '2',
    name: 'Gourmet croissant, scrambled eggs..',
    rating: 4.2,
    reviews: 150,
    description: 'Neque, amet blandit tincidunt vulputate',
    discount: '15% OFF',
    price: 5,
    image: require('../assets/Rectangle 3.5.png'),
  },
  {
    key: '3',
    name: 'Sandwich',
    rating: 4.0,
    reviews: 180,
    description: 'Neque, amet blandit tincidunt vulputate',
    discount: '10% OFF',
    price: 5,
    image: require('../assets/Rectangle 3.6.png'),
  },
  {
    key: '4',
    name: 'Crispy mozza burger',
    rating: 4.5,
    reviews: 220,
    description: 'Neque, amet blandit tincidunt vulputate',
    discount: '20% OFF',
    price: 8,
    image: require('../assets/Rectangle 3.6 (1).png'),
  },
];

const Screen3 = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItemToCart = (price) => {
    setTotalItems(totalItems + 1); // Tăng tổng số sản phẩm
    setTotalPrice(totalPrice + price); // Cộng thêm giá trị sản phẩm vào tổng
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
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* Đường kẻ ngang giữa các món */}
      {index < initialItems.length - 1 && <View style={styles.line} />}
    </View>
  );
  
  

  return (
    <View style={styles.container}>
      {/* Tiêu đề */}
      <View style={styles.header}>
        <Icon name="angle-left" size={40} color="#000" style={styles.backIcon} />
        <Text style={styles.title}>Food</Text>
      </View>
      {/* Các mục món ăn - Cuộn ngang */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.foodContainer}>
        {foodItems.map(item => (
          <TouchableOpacity key={item.id} onPress={() => setSelectedId(item.id)} style={styles.foodItem}>
            <View style={[
              styles.imageContainer,
              selectedId === item.id ? styles.selectedImageContainer : styles.defaultImageContainer
            ]}>
              <Image source={item.image} style={styles.image} />
            </View>
            <Text style={[
              styles.imageTitle,
              selectedId === item.id ? styles.selectedTitle : styles.defaultTitle
            ]}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Sản phẩm - FlatList */}
      <FlatList
        data={initialItems}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        style={styles.list}
      />

      {/* Ô thanh toán */}
      <View style={styles.checkoutContainer}>
        <Text style={styles.checkoutText}>Total items added: {totalItems}</Text>
        <Text style={styles.checkoutText}>Total price: ${totalPrice}</Text>
        <TouchableOpacity style={styles.cartButton} onPress={() => alert("Go to Cart")}>
            <Image source={cartIcon} style={styles.cartImage} />
            {/* Nếu bạn muốn thêm văn bản "View Cart", hãy bao bọc nó bằng <Text> */}  
        </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10, // Thay đổi padding tổng
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  backIcon: {},
  title: {
    fontSize: 24, // Kích thước tiêu đề nhỏ hơn
    fontWeight: '500',
    marginLeft: 10, // Khoảng cách nhỏ hơn
    color: '#000',
  },
  foodContainer: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  foodItem: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  imageContainer: {
    width: 46, // Kích thước nhỏ hơn
    height: 46, // Kích thước nhỏ hơn
    borderRadius: 30,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedImageContainer: {
    backgroundColor: '#4CAF50', // Màu nền khi được chọn
  },
  defaultImageContainer: {
    backgroundColor: '#E0E8ED', // Màu nền mặc định
  },
  image: {
    width: 26, // Kích thước nhỏ hơn
    height: 26, // Kích thước nhỏ hơn
  },
  imageTitle: {
    textAlign: 'center',
    fontSize: 10,
    marginTop: 5,
  },
  selectedTitle: {
    color: '#000', // Màu chữ khi được chọn
  },
  defaultTitle: {
    color: '#888', // Màu chữ mặc định
  },
  list: {
    // Có thể điền thêm các trường khác
    marginBottom: 80
  },
  line: {
    borderBottomColor: '#ccc', // Màu đường kẻ
    borderBottomWidth: 1, // Độ dày của đường kẻ
    marginVertical: 10, // Khoảng cách trên và dưới đường kẻ
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 8, // Kích thước nhỏ hơn
    padding: 0, // Kích thước padding nhỏ hơn
    marginHorizontal: 10,
    flexDirection: 'row', // Đặt hướng của flex là hàng
    alignItems: 'center', // Căn giữa các phần tử theo chiều dọc
    
  },
  itemDetails: {
    flex: 1, // Chiếm toàn bộ không gian còn lại
    marginLeft: 10, // Khoảng cách giữa hình ảnh và chi tiết
  },
  itemImage: {
    width: 100, // Kích thước nhỏ hơn
    height: 80, // Kích thước nhỏ hơn
    borderRadius: 8, // Kích thước nhỏ hơn
  },
  itemName: {
    fontSize: 12.5, // Kích thước chữ nhỏ hơn
    fontWeight: '400',
    marginVertical: 2, // Khoảng cách nhỏ hơn
  },
  itemDescription: {
    fontSize: 11, // Kích thước chữ nhỏ hơn
    color: 'black',
    fontWeight:'400'
  },
  itemDiscount: {
    fontSize: 14, // Kích thước chữ nhỏ hơn
    color: '#EBA731', // Màu sắc cho giảm giá
    fontWeight: '700',
  },
  itemPrice: {
    fontSize: 14, // Kích thước chữ nhỏ hơn
    fontWeight: '700',
  },
  ratingContainer: {
    flexDirection: 'row', // Đặt chiều ngang
    alignItems: 'center', // Căn giữa theo chiều dọc
    justifyContent: 'flex-start', // Căn trái
    marginVertical: 2, // Khoảng cách trên và dưới
  },
   starContainer: {
    borderRadius: 15, // Kích thước bo tròn
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Màu nền (tuỳ chọn)
  },
  priceContainer: {
    flexDirection: 'row', // Đặt chiều ngang
    justifyContent: 'space-between', // Căn đều các phần tử
    marginVertical: 5, // Khoảng cách trên và dưới
    marginTop: 8, // Khoảng cách trên
  },
  itemRating: {
    fontSize: 10, // Kích thước chữ nhỏ hơn
    color: '#888',
    marginLeft: 5, // Khoảng cách giữa ngôi sao và số rating
  },
  itemReviews: {
    fontSize: 12, // Kích thước chữ nhỏ hơn
    color: '#888',
    marginLeft: 20, // Khoảng cách giữa số rating và số reviews
  },
  addButton: {
    backgroundColor: '#00C8CA', // Màu nền cho nút
    borderRadius: 10, // Bo tròn các cạnh
    paddingVertical: 3, // Padding bên trên và dưới
    paddingHorizontal: 12, // Padding bên trái và phải
    marginLeft: 40, // Khoảng cách bên trái nút
  },

  addButtonText: {
    color: '#fff', // Màu chữ
  },
checkoutContainer: {
    padding: 0,
    borderTopWidth: 2, // Đường viền chỉ ở trên
    borderColor: '#EBF1F5', // Màu sắc của đường viền
    marginTop: 10,
    backgroundColor: '#fff', // Màu nền cho ô thanh toán
    flexDirection: 'row', // Đặt chiều ngang
    justifyContent: 'space-between', // Căn đều các phần tử
    
},
checkoutText: {
    fontSize: 12,
    fontWeight: '400',
    marginTop: 25
},
cartButton: {
    marginTop: 0,
    backgroundColor: '#00C8CA', // Màu nền cho nút giỏ hàng
    borderRadius: 10, // Bo tròn các cạnh
    paddingVertical: 15, // Padding bên trên và dưới
    paddingHorizontal: 40, // Padding bên trái và phải
    alignItems: 'center', // Căn giữa nội dung
},

cartButtonText: {
    color: '#fff', // Màu chữ
    fontWeight: 'bold', // Đậm
    fontSize: 16, // Kích thước chữ
},
cartImage: {
    width: 30, // Chiều rộng ảnh
    height: 30, // Chiều cao ảnh
    esizeMode: 'contain', // Giữ tỉ lệ ảnh
},
});

export default Screen3;
