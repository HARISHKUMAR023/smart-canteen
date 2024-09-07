import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Dimensions, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useSharedValue, useAnimatedScrollHandler, useAnimatedStyle, withSpring } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const images = [
  { id: '1', uri: 'https://via.placeholder.com/800x400?text=Image+1' },
  { id: '2', uri: 'https://via.placeholder.com/800x400?text=Image+2' },
  { id: '3', uri: 'https://via.placeholder.com/800x400?text=Image+3' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useSharedValue(0);
  const flatListRef = useRef(null);

  const handleScroll = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
  });

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({ index: currentIndex, animated: true });
    }
  }, [currentIndex]);

  const handlePagination = (index) => {
    setCurrentIndex(index);
  };

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={{ uri: item.uri }} style={styles.image} />
    </View>
  );

  const pagination = () => (
    <View style={styles.pagination}>
      {images.map((_, index) => (
        <TouchableOpacity key={index} onPress={() => handlePagination(index)}>
          <View style={[
            styles.paginationDot,
            { backgroundColor: currentIndex === index ? '#000' : '#ccc' },
          ]} />
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        ref={flatListRef}
      />
      {pagination()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 8,
  },
  pagination: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
  },
});

export default Carousel;
