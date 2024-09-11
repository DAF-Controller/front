import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import CustomButton from '../shared/CustomButton';
import globalStyles from '../../styles/globalStyles';

export default function HomeScreen({ navigation }) {
  const [records, setRecords] = useState(['기록 1', '기록 2']);
  const [videos, setVideos] = useState(['영상 제목 1']);
  const [qna, setQna] = useState(['질문 1', '질문 2']);

  return (
    <View style={globalStyles.container}>
      <ScrollView>
        {/*기록*/}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>기록</Text>
          {records.length > 0 ? (
            records.map((record, index) => (
              <View key={index} style={styles.itemBox}>
                <Text style={styles.itemText}>{record}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.noItemText}>항목이 없습니다.</Text>
          )}
          <CustomButton
            title="더보기"
            onPress={() => navigation.navigate('Record')}
          />
        </View>

        {/*영상*/}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>영상</Text>
          {videos.length > 0 ? (
            videos.map((video, index) => (
              <View key={index} style={styles.itemBox}>
                <Text style={styles.itemText}>{video}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.noItemText}>항목이 없습니다.</Text>
          )}
          <CustomButton
            title="더보기"
            onPress={() => navigation.navigate('Video')}
          />
        </View>

        {/*QnA*/}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>QnA</Text>
          {qna.length > 0 ? (
            qna.map((question, index) => (
              <View key={index} style={styles.itemBox}>
                <Text style={styles.itemText}>{question}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.noItemText}>항목이 없습니다.</Text>
          )}
          <CustomButton
            title="더보기"
            onPress={() => navigation.navigate('QnA')}
          />
        </View>
      </ScrollView>
      <CustomButton
        title="컨트롤러"
        onPress={() => navigation.navigate('Control')}
        style={styles.controlButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  itemBox: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
  noItemText: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  controlButton: {
    backgroundColor: '#FF6347',
    marginTop: 20,
  },
});
