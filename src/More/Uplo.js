import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, Button } from 'react-native';

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const { width: SCREEN_WIDTH } = Dimensions.get("window");

const Uplo = ({ onNavigateToHome, onNavigateToMore}) => {
  const [product, setProduct] = useState('');
  const [waste, setWaste] = useState(''); 

  const handlePost = () => {
    if (product.trim() !== '' && waste.trim() !== '') {
      setProduct('');
      setWaste('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="만드신 제품을 입력해주세요."
        value={product}
        onChangeText={setProduct}
        multiline
        style={styles.input}
      />
      <TextInput
        placeholder="사용하신 쓰레기를 입력해주세요."
        value={waste}
        onChangeText={setWaste}
        multiline
        style={styles.input}
      />
      <Button title="글 올리기" onPress={onNavigateToMore} color="#00DE16" />
    </View>
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
    padding: 10,
    borderColor: '#00DE16', 
    borderWidth: 2.5,  
    borderRadius: 10, 
  },
});

export default Uplo;