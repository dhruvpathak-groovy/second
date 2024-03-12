import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import AvatarGroup from './components/AvatarGroup';
import OptionsComponent from './components/OptionsComponent';

import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  const outerScrollY = useRef(new Animated.Value(0)).current;
  const innerScrollY = useRef(new Animated.Value(0)).current;
  const [showFullText, setShowFullText] = useState(false);
  const maxLinesToShow = 3;
  const [scrollPosition, setScrollPosition] = useState(0);

  const [innerScrollEnabled, setInnerScrollEnabled] = useState(true);

  const scrollY = useRef(new Animated.Value(0)).current;

  const handleReadMore = () => {
    setShowFullText(!showFullText);
  };

  const truncateText = (text, maxLines) => {
    if (showFullText) {
      return text;
    }

    const textArray = text.split('\n');
    const truncatedText = textArray.slice(0, maxLines).join('\n');

    return truncatedText;
  };

  const data = [
    {
      key: '1',
      src: 'https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg',
    },
    {
      key: '2',
      src: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      key: '3',
      src: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    {
      key: '4',
      src: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg',
    },
    {
      key: '5',
      src: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg',
    },
    {
      key: '6',
      src: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg',
    },
    {
      key: '7',
      src: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      key: '8',
      src: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
  ];

  const handleOuterScroll = Animated.event(
    [{nativeEvent: {contentOffset: {y: outerScrollY}}}],
    {
      useNativeDriver: false,
      listener: event => {
        const offsetY = event.nativeEvent.contentOffset.y;
        if (offsetY >= 300) {
          setInnerScrollEnabled(false);
        } else {
          setInnerScrollEnabled(true);
        }
      },
    },
  );

  const handleInnerScroll = Animated.event(
    [{nativeEvent: {contentOffset: {y: innerScrollY}}}],
    {
      useNativeDriver: false,
    },
  );

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={require('./assets/images/background-image.png')}
        style={styles.backgroundImage}
      />
      {/* Header Content */}
      <View style={[styles.headerContainer]}>
        <TouchableOpacity style={styles.backButton}>
          {/* Your back button content */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareButton}>
          {/* Your share button content */}
        </TouchableOpacity>
      </View>
      {/* Scrollable Container */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContentContainer}
        onScroll={handleOuterScroll}
        scrollEventThrottle={16}
        scrollEnabled={innerScrollEnabled}>
        {/* Your other components here */}

        {/* Inner Scrollable Container */}
        <ScrollView
          style={styles.innerScrollView}
          onScroll={handleInnerScroll}
          scrollEventThrottle={16}>
          <View style={styles.contentContainer}>
            <View style={styles.overlayContainer}>
              <Text style={styles.titlemain}>Financial Freedom Europe</Text>

              <Text style={styles.detailsText}>
                Dec 12, 2023 | 16:00 | Business Meeting
              </Text>
              <View style={styles.locationcont}>
                {/* <Location name="location" size={20} color="black" /> */}
                <Text style={styles.detailsText}>
                  Salinas, Santa Elena, Ecuador
                </Text>
              </View>

              <Text
                style={styles.description}
                numberOfLines={showFullText ? undefined : maxLinesToShow}>
                {truncateText(
                  'I have a cure for insomnia. It’s probably worth millions of dollars but I’m giving it to you free. It isn’t warm milk or chamomile tea. It’s list making. List stuff from your life like all your teachers or all the live music you’ve seen or all the Paul Newman movies you’ve watched. Okay, it may not put you to sleep, but at least you’ll entertain yourself while you’re awake instead of worrying your way through the night. Please use the open space below to share your first 50 words on the topic “insomnia.”',
                  maxLinesToShow,
                )}
              </Text>
              {!showFullText && (
                <Text onPress={handleReadMore} style={styles.readMore}>
                  ...Read More
                </Text>
              )}
              {showFullText && (
                <Text onPress={handleReadMore} style={styles.readMore}>
                  Read Less
                </Text>
              )}
              <Text style={styles.title}>Attach Files</Text>

              <View style={styles.imageRow}>
                <View style={styles.imageContainer}>
                  <Image
                    source={require('./assets/images/image-1.jpg')}
                    style={styles.avatarImage}
                    blurRadius={1}
                  />
                  {/* <Pdf name="pdf" size={30} color="#fff" style={styles.icon} /> */}
                </View>

                <View style={styles.imageContainer}>
                  <Image
                    source={require('./assets/images/image-2.jpg')}
                    style={styles.avatarImage}
                    blurRadius={4}
                  />
                  {/* <Imageicon name="image" size={30} color="#fff" style={styles.icon} /> */}
                </View>

                <View style={styles.imageContainer}>
                  <Image
                    source={require('./assets/images/image-3.jpg')}
                    style={styles.avatarImage}
                    blurRadius={5}
                  />

                  {/* <Imageicon name="image" size={30} color="#fff" style={styles.icon} /> */}
                </View>
              </View>

              <OptionsComponent
                title="Privacy Option"
                content="Private"
                type="text"
              />
              <OptionsComponent
                title="Privacy Option"
                content="Private"
                type="text"
              />

              {/* Participants */}
              <OptionsComponent
                title="Participants"
                content={data}
                type="images">
                <AvatarGroup data={data} size={30} />
              </OptionsComponent>

              {/* Agenda */}
              <OptionsComponent
                title="Agenda"
                type="text"
                content="view"
                underline>
                <TouchableOpacity style={styles.viewButton}></TouchableOpacity>
              </OptionsComponent>

              {/* Assignee */}
              <OptionsComponent title="Assignee" content={data} type="images">
                <AvatarGroup data={data} size={30} />
              </OptionsComponent>
              <OptionsComponent
                title="Privacy Option"
                content="Private"
                type="text"
              />
              <OptionsComponent
                title="Privacy Option"
                content="Private"
                type="text"
              />
              <OptionsComponent
                title="Privacy Option"
                content="Private"
                type="text"
              />
              <OptionsComponent
                title="Privacy Option"
                content="Private"
                type="text"
              />
            </View>
          </View>
        </ScrollView>
      </ScrollView>
      <View style={styles.joinButtonContainer}>
        <TouchableOpacity>
          <LinearGradient
            colors={['hsla(192, 95%, 50%, 1)', 'hsla(225, 89%, 47%, 1)']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.joinButton}>
            <Text style={styles.joinButtonText}>Request to Join Event</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
