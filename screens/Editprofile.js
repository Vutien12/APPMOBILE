import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Screen45 = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Icon name="angle-left" size={40} color="black" />
        <Text style={styles.title}>Edit profile</Text>
      </View>

      {/* Avatar Container */}
      <View style={styles.avatarContainer}>
        <Image source={require('../assets/avt.png')} style={styles.avatar} />
        <Image source={require('../assets/mayanh.png')} style={styles.innerImage} resizeMode="contain" />
      </View>

      {/* Full Name Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Full Name</Text>
        <View style={styles.inputWrapper}>
          <Image source={require('../assets/user.png')} style={styles.icon} />
          <TextInput
            style={styles.input}
            value={fullName}
            onChangeText={setFullName}
            placeholder="Enter your full name"
            underlineColorAndroid="transparent"
          />
        </View>
      </View>

      <View style={styles.separator} />

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <View style={styles.inputWrapper}>
          <Image source={require('../assets/email.png')} style={styles.icon1} />
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
          />
        </View>
      </View>

      <View style={styles.separator} />

      {/* Mobile Number Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Mobile Number</Text>
        <View style={styles.inputWrapper}>
          <Image source={require('../assets/phone.png')} style={styles.icon2} />
          <TextInput
            style={styles.input}
            value={mobileNumber}
            onChangeText={setMobileNumber}
            placeholder="Enter your mobile number"
            keyboardType="phone-pad"
            underlineColorAndroid="transparent"
          />
        </View>
      </View>

      <View style={styles.separator} />

      {/* Update Button */}
      <TouchableOpacity style={styles.updateButton}>
        <Text style={styles.updateButtonText}>Update</Text>
      </TouchableOpacity>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    position: 'relative',
  },
  avatar: {
    width: 158,
    height: 158,
    borderRadius: 79,
  },
  innerImage: {
    position: 'absolute',
    width: 50,
    height: 50,
    top: '50%',
    left: '50%',
    marginLeft: -25,
    marginTop: -25,
  },
  inputContainer: {
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    height: 40,
    paddingHorizontal: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  icon1: {
    marginRight: 10,
  },
  icon2: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  separator: {
    height: 10,
    backgroundColor: 'transparent',
  },
  updateButton: {
    backgroundColor: '#00C8CA', // Màu nền cho nút Update
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 30, // Increased margin for better visibility
  },
  updateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Screen45;
