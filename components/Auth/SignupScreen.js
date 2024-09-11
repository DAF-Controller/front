import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import CustomButton from '../shared/CustomButton';
import globalStyles from '../../styles/globalStyles';
import authService from '../../services/authService';

export default function SignupScreen({ navigation }) {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [inviteCode, setInviteCode] = useState('');

  const handleSignup = async () => {
    try {
      const response = await authService.signup(name, id, password, inviteCode);
      if (response.success) {
        alert('가입이 완료되었습니다');
        navigation.navigate('Login');
      } else {
        alert('회원가입 실패');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>환영합니다!</Text>
      <TextInput
        style={styles.input}
        placeholder="이름"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="아이디(ID)"
        value={id}
        onChangeText={setId}
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="초대 코드 (선택)"
        value={inviteCode}
        onChangeText={setInviteCode}
      />
      <CustomButton title="회원가입" onPress={handleSignup} />
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
});
