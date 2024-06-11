import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

function BackHeader() {
  const { backButton, backText } = styles;
  const navigation = useNavigation();

  return (
    <SafeAreaView edges={['right', 'top', 'left']} style={backButton}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={backText}>
        <Icon name="chevron-back" size={24} color="#fff" />
        <Text style={styles.text}>Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    marginLeft: 10,
    flexDirection: 'row',
    padding: 10,
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
});

export default BackHeader;
