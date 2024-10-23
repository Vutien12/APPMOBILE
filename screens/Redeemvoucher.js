
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, ImageBackground, StatusBar } from 'react-native';

const Screen1 = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground source={require('../assets/Rectangle.png')} style={styles.background}>
        <Text style={styles.title}>REDEEM VOUCHER</Text>
        <Text style={styles.instructions}>If you have the voucher, please enter the code here.</Text>
        <TextInput style={styles.input} placeholder="Voucher Code" defaultValue="1254-mhu589-698" />
        <View style={styles.buttonContainer}>
          <Button title="Redeem Voucher" onPress={() => alert('Voucher Redeemed!')} color="#00FF94" />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  instructions: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 30,
  },
  input: {
    height: 40,
    borderBottomWidth: 2,
    borderBottomColor: 'gray',
    backgroundColor: 'transparent',
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '80%',
    color: '#fff',
    textAlign: 'center',
    borderBottomColor: 'white',
  },
  buttonContainer: {
    borderRadius: 15,
    overflow: 'hidden',
    width: '80%',
  },
});

export default Screen1;
