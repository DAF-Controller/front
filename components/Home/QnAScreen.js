import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import globalStyles from '../../styles/globalStyles';
import CustomButton from '../shared/CustomButton';

export default function QnAScreen() {
  // 더미 데이터
  const [qna, setQna] = useState([
    '질문 1', '질문 2', '질문 3', '질문 4', '질문 5', '질문 6'
  ]);
  const [page, setPage] = useState(1);
  const qnaPerPage = 5;

  const totalPages = Math.ceil(qna.length / qnaPerPage);

  const currentQnA = qna.slice(
    (page - 1) * qnaPerPage,
    page * qnaPerPage
  );

  return (
    <View style={globalStyles.container}>
      <ScrollView>
        {currentQnA.length > 0 ? (
          currentQnA.map((question, index) => (
            <Text key={index} style={styles.itemText}>
              {question}
            </Text>
          ))
        ) : (
          <Text style={styles.noItemText}>질문이 없습니다.</Text>
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
