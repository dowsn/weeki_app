import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { UserContext } from '../../contexts/UserContext';
import CitySelector from '../main/CitySelectorView';

const FeedHeader = () => {
  const { container, text, safeArea } = styles;

  const [user, setUser] = useContext(UserContext);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={safeArea}>
      <TouchableOpacity
        onPress={() => navigation.navigate('CitySelectorView')}
        style={container}
        activeOpacity={1}
      >
        <Ionicons name="chevron-down" size={20} color="white" />
        <Text style={text}>{user['selectedCityShortName']}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  safeArea: {
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 24) : 0,
    backgroundColor: 'black',
  },
  container: {
    backgroundColor: 'black',
    flexDirection: 'row',
    paddingBottom: 10,
    paddingRight: 20,
    paddingTop: 10,
    justifyContent: 'flex-end',

  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});
export default FeedHeader;