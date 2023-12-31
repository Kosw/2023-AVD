import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, Button, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const { width: SCREEN_WIDTH } = Dimensions.get("window");

const Uplo = ({ onNavigateToHome, onNavigateToMore }) => {
  const [product, setProduct] = useState('');
  const [waste, setWaste] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePost = () => {
    if (product.trim() !== '' && waste.trim() !== '') {
      setProduct('');
      setWaste('');
      setPhoneNumber('');
    }
  };

  const handleSignUp = async () => {
    const url = "http://13.125.75.145:3000/team5/team5storeSave"
    
    const response = await fetch(url,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          use_trash: waste,
          product: product,
          phone_number: phoneNumber,
        }),
      }, 
    );

    const responsetext = await response.text();

    if (response.status === 200) {
      console.log('성공');
      onNavigateToMore();
      return response;

    } else {
      console.log('실패');
    }

  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.buttonContainer}>
          <Button title="글 올리기" onPress={handleSignUp} color="#00DE16" />
        </View>
        <Text style={styles.pageTitle}>제품</Text>

        <TextInput
          placeholder="만드신 제품을 입력해주세요."
          value={product}
          onChangeText={setProduct}
          multiline
          style={styles.input}
        />
        <Text style={styles.pageTitle}>쓰레기</Text>
        <TextInput
          placeholder="사용하신 쓰레기를 입력해주세요."
          value={waste}
          onChangeText={setWaste}
          multiline
          style={styles.input}
        />
        <Text style={styles.pageTitle}>연락처</Text>
        <TextInput
          placeholder="전화번호를 입력해주세요."
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          multiline
          style={styles.input}
        />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 120,
    marginBottom: 20,
    padding: 60,
    borderColor: '#00DE16',
    borderWidth: 3,
    borderRadius: 10,
  },
  buttonContainer: {
    position: 'absolute',
    top: 50,
    right: 0,
  },
  pageTitle: {
    fontSize: 28,
    marginTop: 30,
    marginBottom: 16,
    color: '#00DE16',
  },
});

export default Uplo;
