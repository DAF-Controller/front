import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';  

export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <Image source={require('../../assets/images/logo.png')} style={styles.logo} />

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Ionicons name="search-outline" size={24} color="white" style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-circle-outline" size={24} color="white" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  logo: {
    width: 40,
    height: 40,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 15,
  },
});
