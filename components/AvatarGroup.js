import React from 'react';
import {View, FlatList, Image, Text, StyleSheet} from 'react-native';

const AvatarGroup = ({data, size}) => {
  const truncatedData = data.slice(0, 4);
  const extraCount = data.length > 4 ? data.length - 4 : 0;

  const renderAvatar = ({item, index}) => {
    const marginLeft = index > 0 ? -size / 4 : 0;

    return (
      <View style={[styles.avatarContainer, {marginLeft}]}>
        <Image
          source={{uri: item.src}}
          style={[
            styles.avatar,
            {width: size, height: size, zIndex: index === 1 ? -1 : 0},
          ]}
        />
        {index === 0 && extraCount > 0 && (
          <View style={[styles.countContainer, styles.topCount]}>
            <Text style={styles.countText}>+{extraCount}</Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <FlatList
      data={truncatedData}
      horizontal
      keyExtractor={item => item.key}
      renderItem={renderAvatar}
    />
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  avatar: {
    borderRadius: 50,
    position: 'relative',
  },
  countContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 50,
    padding: 4,
    alignSelf: 'center',
  },
  countText: {
    color: 'white',
    fontSize: 12,
  },
  topCount: {
    top: 2,
    zIndex: 1,
  },
});

export default AvatarGroup;
