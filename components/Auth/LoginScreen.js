import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import CustomButton from '../shared/CustomButton';
import globalStyles from '../../styles/globalStyles';

export default function LoginScreen({ navigation }) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 백엔드 없이 임시 설정
    if (id && password) {
      navigation.navigate('Home');
    } else {
      alert('ID와 비밀번호를 입력하세요.');
    }
  };

  return (
    
    <View style={styles.container}>
      <Image 
        source={require('../../assets/images/logo.png')}  
        style={styles.icon}
      />
      <Text style={styles.title}>DAF</Text>
      <TextInput
        style={styles.input}
        placeholder="ID"
        value={id}
        onChangeText={setId}
      />
      <TextInput
        style={styles.input}
        placeholder="Pw"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <CustomButton title="로그인" onPress={handleLogin} />
      <CustomButton
        title="회원가입"
        onPress={() => navigation.navigate('Signup')}
        style={styles.signupButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    ...globalStyles.input,
    marginBottom: 10,
  },
  signupButton: {
    backgroundColor: '#FF6347',
  },
  icon: {
    width: 120,  
    height: 120,  
    marginBottom: 20,  
  },
});
