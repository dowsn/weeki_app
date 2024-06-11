import Ionicons from '@expo/vector-icons/Ionicons';
import moment from 'moment';
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const ExhibitionDetail = ({ route }) => {
  const { item } = route.params;
  const { title, opening_start } = item;
  // const [count, setCount] = useState(0);

  // const { title } = item;

  return (
    <View>
      <Text>Tile: {title}</Text>
      <Text>Time: {moment(opening_start).format('DD. MM. YYYY')}</Text>
      <Ionicons name="checkmark-circle" size={32} color="green" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // fills available space
    backgroundColor: 'black',
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  footer: {
    fontSize: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
});

export default ExhibitionDetail;
