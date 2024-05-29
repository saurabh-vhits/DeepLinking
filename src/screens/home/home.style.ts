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
  },
  image: {
    height: scale(200),
    width: '100%',
  },
});
