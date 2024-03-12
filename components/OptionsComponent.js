import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AvatarGroup from './AvatarGroup';

const OptionsComponent = ({title, content, type, underline}) => {
  return (
    <View style={styles.optionsContainer}>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, underline && styles.underlinedTitle]}>
          {title}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.contentContainer}
        onPress={() => console.log('Pressed')}>
        {type === 'text' && (
          <View style={styles.textContainer}>
            <Text style={styles.contentText}>{content}</Text>
          </View>
        )}
        {type === 'images' && (
          <View style={styles.avatarContainer}>
            <AvatarGroup data={content} size={30} />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end', // Align to the end
    marginBottom: 20, // Adjust the margin as needed
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  underlinedTitle: {
    textDecorationLine: 'underline',
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Align to the end
    alignItems: 'flex-end', // Align to the end
  },
  textContainer: {
    marginRight: 10, // Adjust the margin as needed
  },
  avatarContainer: {},
  contentText: {
    fontSize: 18,
    color: 'black',
  },
};

export default OptionsComponent;
