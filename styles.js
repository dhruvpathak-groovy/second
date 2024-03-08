import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '50%',
    resizeMode: 'cover',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
  },
  shareButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'transparent',
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

    marginBottom: 20,
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
    elevation: 3,
  },
  icon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -12}, {translateY: -12}],
    zIndex: 1,
  },
  privacyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  privacyText: {
    fontSize: 18,
    color: 'black',
  },
  participantsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  agendaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  titleWithUnderline: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textDecorationLine: 'underline',
    marginVertical: 10,
  },
  viewButton: {
    padding: 0,
  },
  viewButtonText: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },
  assigneeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  joinButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  joinButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default styles;
