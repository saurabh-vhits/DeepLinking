import color from '@theme/color';
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-scaling';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  contentContainer: {
    paddingHorizontal: 10,
    paddingBottom:20
  },
  image: {
    marginTop:20,
    height: scale(200),
    width: '100%',
  },
  paragraph: {
    marginTop: 10,
    fontSize: scale(16),
    color: color.black,
    textAlign:'justify'
  },
});
