import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,

    resizeMode: 'cover',
    zIndex: -1,
  },

  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 20,
    zIndex: 1,
  },
  backButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
  },
  shareButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
  },

  contentContainer: {
    paddingTop: '80%',
    paddingBottom: 20,
  },
  overlayContainer: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
    backgroundColor: 'white',
    paddingTop: 20,
    paddingHorizontal: 30,
  },
  scrollView: {
    height: '100%',

    width: '100%',
  },
  titlemain: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 12,
  },

  detailsText: {
    fontSize: 17,
    color: 'black',
    marginBottom: 5,
  },
  locationcont: {alignItems: 'center', flexDirection: 'row'},
  description: {
    fontSize: 17,
    color: 'black',
  },
  readMore: {
    color: 'blue',
    textDecorationLine: 'none',
    marginBottom: 10,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 15,
  },
  avatarImage: {
    width: 120,
    height: 120,
    borderRadius: 15,
  },
  imageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 20,
    shadowRadius: 10,
  },
  icon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -12}, {translateY: -12}],
    zIndex: 1,
  },

  joinButtonContainer: {
    padding: 20,
    paddingVertical: 23,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
  },
  joinButton: {
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  joinButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default styles;
