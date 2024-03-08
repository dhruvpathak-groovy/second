import React from 'react';
import {View, FlatList, Image, Text, StyleSheet} from 'react-native';

const AvatarGroup = ({data, size}) => {
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={item => item.key}
      renderItem={({item}) => (
        <View style={styles.avatarContainer}>
          <Image
            source={{uri: item.src}}
            style={[styles.avatar, {width: size, height: size}]}
          />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    marginRight: -8,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  avatar: {
    borderRadius: 50,
  },
});

export default AvatarGroup;
