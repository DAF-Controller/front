import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Image, View } from 'react-native';
import HomeScreen from '../components/Home/HomeScreen';
import ProfileScreen from '../components/Profile/ProfileScreen';
import EditProfileScreen from '../components/Profile/EditProfileScreen';
import { Ionicons } from '@expo/vector-icons';  
import RecordScreen from '../components/Home/RecordScreen';  
import VideoScreen from '../components/Home/VideoScreen';    
import QnAScreen from '../components/Home/QnAScreen';          
import ControlScreen from '../components/Control/ControlScreen'; 
import LoginScreen from '../components/Auth/LoginScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#000' },  
        headerTintColor: '#fff',  
        headerTitleAlign: 'center',
      }}
    >
      {/* 홈 화면 */}
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: 'DAF',
          headerLeft: () => (
            <Image
              source={require('../assets/images/logo.png')}  
              style={{ width: 40, height: 40, marginLeft: 10 }}
            />
          ),

          headerRight: () => (
            <View style={{ flexDirection: 'row', marginRight: 10 }}>
              {/* 검색 버튼 (미구현) */}
              <TouchableOpacity onPress={() => console.log('Search button pressed')}>
                <Ionicons name="search-outline" size={24} color="white" style={{ marginRight: 15 }} />
              </TouchableOpacity>

              {/* 프로필 버튼 */}
              <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Ionicons name="person-circle-outline" size={24} color="white" />
              </TouchableOpacity>
            </View>
          ),
        })}
      />

      {/* 프로필 화면 */}
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: '프로필',
        }}
      />

      {/* 프로필 편집 화면 */}
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{
          title: '프로필 편집',
        }}
      />

      {/* 기록 화면 */}
      <Stack.Screen
        name="Record"
        component={RecordScreen}
        options={{
          title: '기록',
        }}
      />

      {/* 영상 화면 */}
      <Stack.Screen
        name="Video"
        component={VideoScreen}
        options={{
          title: '영상',
        }}
      />

      {/* QnA 화면 */}
      <Stack.Screen
        name="QnA"
        component={QnAScreen}
        options={{
          title: 'QnA',
        }}
      />

      {/* 컨트롤러 화면 */}
      <Stack.Screen
        name="Control"
        component={ControlScreen}
        options={{
          title: '컨트롤러',
        }}
      />

      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: '로그인' }}
      />
    </Stack.Navigator>
  );
}
