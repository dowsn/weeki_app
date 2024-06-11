import React, { useContext, useState } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { UserContext } from '../../contexts/UserContext';

const PickListSelector = ({ data }) => {

  const {
    selectedItem,
    pickListElement,
    pickListImage,
    selectedText,
    pickListText,
  } = styles;
  const [user, setUser] = useContext(UserContext);
  const [selected, SetSelected] = useState(user.selectedPickListIndex);


  const changePickList = (index) => {

    SetSelected(index);

    setUser((prevUser) => ({
      ...prevUser,
      selectedPickListIndex: index,
    }));
  }

  const renderPickList = ({ item, index }) => {
        return (
          <TouchableOpacity
            onPress={() => changePickList(index)}
            style={[pickListElement, selected == index ? selectedItem : {}]}
            activeOpacity={1}
          >
            <Image
              source={{ uri: item.thumbnail }}
              style={[pickListImage, selected == index ? selectedText : {}]}
            />
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={[pickListText, selected == index ? selectedText : {}]}
            >
              {item.name.trimEnd()}
            </Text>
          </TouchableOpacity>
        );
      };

  const { container } = styles;

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderPickList}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ alignItems: 'center' }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pickListElement: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    width: 100,
  },
  // Other styles...
  selectedItem: {
    backgroundColor: 'black', // Change this to the color you want
  },
  selectedText: {
    color: 'white', // Change this to the color you want
  },
  pickListImage: {
    width: 50,
    height: 50,
    borderRadius: 25, // half of your width and height
    borderColor: 'white',
    borderWidth: 2,
  },
  selectedImage: {
    // increase brightness
  },
  pickListText: {
    color: 'gray',
    // width: 80,
    borderWidth: 1,
    borderColor: 'transparent',
    textAlign: 'center',
  },
});

export default PickListSelector;