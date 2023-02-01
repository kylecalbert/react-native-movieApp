import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: -50,
  },
  bannerImage: {
    width: '100%',
    height: 300,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  posterImage: {
    height: 200,
    width: 100,
    borderRadius: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  filmTitle: {},
  filmInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filmInfo: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  metaDataContainer: {
    flexDirection: 'row',
  },
  marginTop: {
    marginTop: 20,
  },
  marginRight: {
    marginRight: 5,
  },
});

export default styles;
