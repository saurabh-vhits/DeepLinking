import color from '@theme/color';
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-scaling';

export const styles = StyleSheet.create({
  container: {
    height: scale(46),
    width: '100%',
    backgroundColor: color.black,
    borderRadius: scale(5),
  },
  buttonContainer: {
    height: scale(46),
    borderRadius: scale(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelText: {
    fontSize: scale(16),
    color: color.white,
    fontWeight: '600',
  },
});
