import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Thay đổi đường dẫn đến ảnh của bạn tại đây
const foodImage1 = require('../assets/Rectangle3.4.png'); // Ảnh món thứ nhất
const foodImage2 = require('../assets/Rectangle3.6.png'); // Ảnh món thứ hai

const Screen5 = () => {
  // Trạng thái để lưu số lượng món ăn
  const [quantity1, setQuantity1] = useState(1);
  const [quantity2, setQuantity2] = useState(1);

  // Hàm tăng số lượng
  const increaseQuantity = (setQuantity) => {
    setQuantity((prev) => prev + 1);
  };

  // Hàm giảm số lượng
  const decreaseQuantity = (setQuantity) => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  // Giá của từng món
  const price1 = 10; // Giá món thứ nhất
  const price2 = 5;  // Giá món thứ hai

  // Tính tổng số món và tổng giá
  const totalItems = quantity1 + quantity2;
  const totalPrice = quantity1 * price1 + quantity2 * price2;

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Icon name="angle-left" size={40} color="black" />
          <Text style={styles.title}>Food cart</Text>
        </View>
        
        {/* Info Box */}
        <View style={styles.infoBox}>
          <View style={styles.infoItem}>
            <Text style={styles.infoText}>{totalItems} Items added</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoText}>Total: ${totalPrice}</Text>
          </View>
        </View>

        {/* Món thứ nhất */}
        <View style={styles.menuContainer}>
          <Image 
            source={foodImage1} // Sử dụng ảnh món thứ nhất
            style={styles.menuImage}
          />
          <View style={styles.menuInfo}>
            <Text style={styles.menuTitle}>Bagels with turkey and bacon</Text>
            <View style={styles.priceQuantityContainer}>
              <Text style={styles.menuPrice}>${price1}</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => decreaseQuantity(setQuantity1)}
                >
                  <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantityText}>{quantity1}</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => increaseQuantity(setQuantity1)}
                >
                  <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        {/* Đường line ngăn cách */}
        <View style={styles.divider} />

        {/* Món thứ hai */}
        <View style={styles.menuContainer}>
          <Image 
            source={foodImage2} // Sử dụng ảnh món thứ hai
            style={styles.menuImage}
          />
          <View style={styles.menuInfo}>
            <Text style={styles.menuTitle}>Sandwich</Text>
            <View style={styles.priceQuantityContainer}>
              <Text style={styles.menuPrice}>${price2}</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => decreaseQuantity(setQuantity2)}
                >
                  <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantityText}>{quantity2}</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => increaseQuantity(setQuantity2)}
                >
                  <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* Đường line ngăn cách giữa menu và ORDER SUMMARY */}
        <View style={styles.divider} />

        {/* ORDER SUMMARY */}
        <View style={styles.orderSummary}>
          <Text style={styles.summaryTitle}>ORDER SUMMARY</Text>
          <View style={styles.orderItem}>
            <Text style={styles.orderText}>Bagels with turkey and bacon</Text>
            <Text style={styles.orderPrice}>${price1 * quantity1}</Text>
          </View>
          <View style={styles.orderItem}>
            <Text style={styles.orderText}>Sandwich</Text>
            <Text style={styles.orderPrice}>${price2 * quantity2}</Text>
          </View>
          {/* Dòng Sub Total */}
          <View style={styles.subtotalContainer}>
            <Text style={styles.subtotalText}>Total:</Text>
            <Text style={styles.subtotalPrice}>${totalPrice}</Text>
          </View>
        </View>
      </ScrollView>

      {/* Khung chứa nút PROCEED TO PAYMENT */}
      <View style={styles.paymentContainer}>
        <TouchableOpacity style={styles.paymentButton} onPress={() => { /* Xử lý khi nhấn nút */ }}>
          <Text style={styles.paymentButtonText}>PROCEED TO PAYMENT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    marginLeft: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    marginLeft: 15,
  },
  infoBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E0E8ED',
    marginTop: 10,
    height: 60, // Thiết lập chiều cao cố định cho khung
    elevation: 0, // Thêm bóng đổ (chỉ trên Android)
    marginBottom: 20,
    marginHorizontal: 0,
    borderRadius: 0,
  },
  infoItem: {
    flex: 1,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 15,
    fontWeight: '600',
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  menuImage: {
    width: 90, // Kích thước ảnh
    height: 77, // Kích thước ảnh
    borderRadius: 5, // Bo góc cho ảnh
    marginRight: 10,
  },
  menuInfo: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 14,
    fontWeight: '400',
  },
  priceQuantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  menuPrice: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  button: {
    width: 23,
    height: 23,
    borderWidth: 1,
    borderColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#00C8CA'
  },
  buttonText: {
    fontSize: 14,
    color:'#FFF'
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  divider: {
    height: 1, // Chiều cao của đường line
    backgroundColor: '#CCCCCC', // Màu sắc đường line
    marginVertical: 0, // Khoảng cách giữa các mục
    marginHorizontal: 20,
  },
  orderSummary: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  orderText: {
    fontSize: 16,
  },
  orderPrice: {
    fontSize: 16,
    fontWeight: '700',
  },
  subtotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
    marginTop: 50
  },
  subtotalText: {
    fontSize: 22,
    fontWeight: '600',
  },
  subtotalPrice: {
    fontSize: 22,
    fontWeight: '700',
  },
  orderSummaryDivider: {
    height: 1,
    backgroundColor: '#CCCCCC',
    marginVertical: 10,
  },
  paymentContainer: {
    padding: 0,
    borderTopWidth: 0,
    borderTopColor: '#CCCCCC',
    backgroundColor: '#fff',
  },
  paymentButton: {
    backgroundColor: '#00C8CA', // Màu nền của nút (Tomato)
    paddingVertical: 15,
    borderRadius: 0,
    alignItems: 'center',
  },
  paymentButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
  },
});

export default Screen5;
