import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet } from 'react-native';
import { useFeed } from '../../hooks/useFeed';
import Error from '../divs/Error';
import FeedList from '../lists/FeedList';
import PickListSelector from '../nav/PickListSelector';

const FeedView = ({ navigation }) => {
  const [pickLists, feeds, isLoading, error] = useFeed();
  const { container, activityIndicator } = styles;


  return (
    <SafeAreaView style={container}>
      {error ? (
        <Error message={error} />
      ) : feeds && !isLoading ? (
        <>
          <PickListSelector data={pickLists} />
          <FeedList data={feeds} />
        </>
      ) : (
          <ActivityIndicator
            size={'large'}
            color={'white'}
            style={activityIndicator}
          />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // fills available space
    backgroundColor: 'black',
    width: '100%',
    // marginTop: StatusBar.currentHeight || 0,
    justifyContent: 'center',
  },
  activityIndicator: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
  },

});

export default FeedView;
