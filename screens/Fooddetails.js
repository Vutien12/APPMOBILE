import React from 'react';
import { StyleSheet, View, Image, Dimensions, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Screen4 = ({ navigation }) => {
  const itemPrice = 10; // Giá sản phẩm
  const itemName = "Bagels with turkey and bacon"; // Tên sản phẩm

  const handleAddToBag = () => {
    // Điều hướng về Screen3 và truyền dữ liệu
    navigation.navigate('Screen3', {
      addedItem: {
        name: itemName,
        price: itemPrice,
      },
    });
  };

  return (
    <View style={styles.container}>
      {/* Full-width, one-third height Image */}
      <Image
        source={require('../assets/Rectangle 3.4 (1).png')} // Cập nhật đường dẫn đến tệp hình ảnh của bạn
        style={styles.largeImage}
        resizeMode="cover"
      />

      {/* Icon positioned on top of the image */}
      <View style={styles.iconOverlay}>
        <Icon name="angle-left" size={40} color="#FFF" />
      </View>

      {/* Name, rating, description, and price section */}
      <View style={styles.infoContainer}>
        <Text style={styles.itemName}>{itemName}</Text>
        <View style={styles.ratingContainer}>
          <Icon name="star" size={20} color="#FFD700" />
          <Text style={styles.ratingText}>3.9</Text>
          <Text style={styles.reviewsText}>Reviews (200)</Text>
        </View>
        <Text style={styles.descriptionText}>
          A poppy seed bagel is spread with a mixture of cream cheese, parsley, and pickles. Subsequently, a slice of crisp lettuce is added, with a slice of tomato, two half slices of turkey, and two half slices of pastrami. To top it off, this king feast takes only five minutes to complete and contains less than 400 calories.
        </Text>

        {/* Price section */}
        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Price:</Text>
          <Text style={styles.priceValue}>${itemPrice}</Text>
        </View>
      </View>

      {/* Add to Bag bar at the bottom */}
      <TouchableOpacity style={styles.addToBagBar} onPress={handleAddToBag}>
        <Text style={styles.addToBagBarText}>ADD TO BAG</Text>
      </TouchableOpacity>
    </View>
  );
};

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 0,
  },
  largeImage: {
    width: '100%',
    height: height / 3, // Takes up exactly one-third of the screen height
  },
  iconOverlay: {
    position: 'absolute',
    top: 40, // Adjust this value to position the icon vertically
    left: 20, // Adjust this value to position the icon horizontally
  },
  infoContainer: {
    paddingHorizontal: 20,
    marginTop: 15,
  },
  itemName: {
    fontSize: 20,
    fontWeight: '400',
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 16,
    marginLeft: 5,
    marginRight: 15,
    color: '#8E929B',
  },
  reviewsText: {
    fontSize: 16,
    color: '#8E929B',
  },
  descriptionText: {
    marginTop: 10,
    fontSize: 14,
    color: '#000',
    lineHeight: 30, // Improves readability by increasing the spacing between lines
    fontWeight: '300',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  priceLabel: {
    fontSize: 30,
    color: '#000',
    fontWeight: '300',
    marginRight: 5,
  },
  priceValue: {
    fontSize: 30,
    color: '#000',
    fontWeight: '700',
  },
  addToBagBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#00C8CA', // Background color of the bar
    paddingVertical: 15,
    alignItems: 'center',
  },
  addToBagBarText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default Screen4;
