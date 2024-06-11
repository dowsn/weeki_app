import React from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import useImageLoader from '../../hooks/useImageLoader';

const FeedElement = (props) => {
  const { item, background, titleText, activityIndicator } = styles;
  const { title, images } = props;

  const mainImage = images[0];
  const { isLoading, isError, imageData } = useImageLoader(mainImage?.url);

  return (
    <View style={item}>
  <View style={styles.overlay}>
    {isLoading && (
      <ActivityIndicator
        size="large"
        color="black"
      />
        )}
      </View>
      <ImageBackground
        source={imageData ? { uri: imageData } : null}
        style={background}
      >
        {/* {isError && <Text>Error loading image</Text>} */}
        <Text style={titleText}>{title}</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityIndicator: {
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    height: 200,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleText: {
    fontSize: 32,
    textAlign: 'center',
    color: 'white',
  },
});

export default FeedElement;
