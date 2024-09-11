import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import globalStyles from '../../styles/globalStyles';
import CustomButton from '../shared/CustomButton';

export default function RecordScreen() {
  // 더미 데이터
  const [records, setRecords] = useState([
    '기록 1', '기록 2', '기록 3', '기록 4', '기록 5', '기록 6'
  ]);
  const [page, setPage] = useState(1);
  const recordsPerPage = 5;

  const totalPages = Math.ceil(records.length / recordsPerPage);

  const currentRecords = records.slice(
    (page - 1) * recordsPerPage,
    page * recordsPerPage
  );

  return (
    <View style={globalStyles.container}>
      <ScrollView>
        {currentRecords.length > 0 ? (
          currentRecords.map((record, index) => (
            <Text key={index} style={styles.itemText}>
              {record}
            </Text>
          ))
        ) : (
          <Text style={styles.noItemText}>기록이 없습니다.</Text>
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
