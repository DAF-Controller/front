import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import globalStyles from '../../styles/globalStyles';
import CustomButton from '../shared/CustomButton';

export default function VideoScreen() {
  // 더미 데이터
  const [videos, setVideos] = useState([
    '영상 제목 1', '영상 제목 2', '영상 제목 3', '영상 제목 4', '영상 제목 5', '영상 제목 6'
  ]);
  const [page, setPage] = useState(1);
  const videosPerPage = 5;

  const totalPages = Math.ceil(videos.length / videosPerPage);

  const currentVideos = videos.slice(
    (page - 1) * videosPerPage,
    page * videosPerPage
  );

  return (
    <View style={globalStyles.container}>
      <ScrollView>
        {currentVideos.length > 0 ? (
          currentVideos.map((video, index) => (
            <Text key={index} style={styles.itemText}>
              {video}
            </Text>
          ))
        ) : (
          <Text style={styles.noItemText}>영상이 없습니다.</Text>
        )}
      </ScrollView>

      <View style={styles.pagination}>
        {page > 1 && (
          <CustomButton
            title="이전"
            onPress={() => setPage(page - 1)}
          />
        )}
        {page < totalPages && (
          <CustomButton
            title="다음"
            onPress={() => setPage(page + 1)}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemText: {
    fontSize: 16,
    marginBottom: 5,
  },
  noItemText: {
    fontSize: 16,
    color: 'gray',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
