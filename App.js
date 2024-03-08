import React, {useState} from 'react';
import {View, ScrollView, Image, Text, TouchableOpacity} from 'react-native';
import AvatarGroup from './components/AvatarGroup';
import styles from './styles';

const App = () => {
  const [showFullText, setShowFullText] = useState(false);
  const maxLinesToShow = 3;

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
  ];

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/images/background-image.png')}
        style={styles.backgroundImage}
      />
      <TouchableOpacity style={styles.backButton}>
        {/* <Back name="arrow-back" size={20} color="black" /> */}
      </TouchableOpacity>

      <TouchableOpacity style={styles.shareButton}>
        {/* <Send name="send" size={20} color="black" /> */}
      </TouchableOpacity>
      <ScrollView>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}>
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
                />
                {/* <Pdf name="pdf" size={30} color="#fff" style={styles.icon} /> */}
              </View>

              <View style={styles.imageContainer}>
                <Image
                  source={require('./assets/images/image-2.jpg')}
                  style={styles.avatarImage}
                />
                {/* <Imageicon name="image" size={30} color="#fff" style={styles.icon} /> */}
              </View>

              <View style={styles.imageContainer}>
                <Image
                  source={require('./assets/images/image-3.jpg')}
                  style={styles.avatarImage}
                />

                {/* <Imageicon name="image" size={30} color="#fff" style={styles.icon} /> */}
              </View>
            </View>
            <View style={styles.privacyContainer}>
              <Text style={styles.title}>Privacy Option</Text>
              <TouchableOpacity style={styles.viewButton}>
                <Text style={styles.privacyText}>Private</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.privacyContainer}>
              <Text style={styles.title}>Privacy Option</Text>
              <TouchableOpacity style={styles.viewButton}>
                <Text style={styles.privacyText}>Private</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.privacyContainer}>
              <Text style={styles.title}>Privacy Option</Text>
              <TouchableOpacity style={styles.viewButton}>
                <Text style={styles.privacyText}>Private</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.privacyContainer}>
              <Text style={styles.title}>Privacy Option</Text>
              <TouchableOpacity style={styles.viewButton}>
                <Text style={styles.privacyText}>Private</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.privacyContainer}>
              <Text style={styles.title}>Privacy Option</Text>
              <TouchableOpacity style={styles.viewButton}>
                <Text style={styles.privacyText}>Private</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.privacyContainer}>
              <Text style={styles.title}>Privacy Option</Text>
              <TouchableOpacity style={styles.viewButton}>
                <Text style={styles.privacyText}>Private</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.participantsContainer}>
              <Text style={styles.title}>Participants</Text>
              <View>
                <AvatarGroup data={data} size={30} />
              </View>
            </View>

            <View style={styles.agendaContainer}>
              <Text style={styles.titleWithUnderline}>Agenda</Text>
              <TouchableOpacity style={styles.viewButton}>
                <Text style={styles.viewButtonText}>View</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.assigneeContainer}>
              <Text style={styles.title}>Assignee</Text>
              <View>
                <AvatarGroup data={data} size={30} />
              </View>
            </View>

            <TouchableOpacity style={styles.joinButton}>
              <Text style={styles.joinButtonText}>Request to Join Event</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default App;
