import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FeedSeparator from '../divs/FeedSeparator';
import EmptyFeedList from '../empty/EmptyFeedList';
import FeedElement from '../list_elements/FeedElement';

const FeedList = ({ data }) => {
    const navigation = useNavigation();

  const renderItem = ({ item }) => {


      return (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() =>
            navigation.navigate('ExhibitionDetail', { item: item })
          }
        >
          <FeedElement title={item.title} images={item.images} />
        </TouchableOpacity>
      );
    };

return(
<FlatList
  data={data}
  renderItem={renderItem}
  keyExtractor={(item) => item.id}
  ItemSeparatorComponent={FeedSeparator}
  ListEmptyComponent={EmptyFeedList}
  />
);
}

export default FeedList;
