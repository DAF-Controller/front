import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import CustomButton from '../shared/CustomButton';
import globalStyles from '../../styles/globalStyles';

export default function ControlScreen() {
  const handleWaterControl = () => {
    // 아두이노 연결
    console.log('물주기 원격 제어 실행');
  };

  return (
    <View style={globalStyles.container}>
      <Text style={styles.title}>컨트롤 화면</Text>
      <CustomButton title="농작물 물주기" onPress={handleWaterControl} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
