import color from '@theme/color';
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-scaling';
export const styles = StyleSheet.create({
  container: {
    height: scale(45),
    marginBottom: scale(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    height: scale(40),
    width: scale(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  labelText: {
    fontSize: scale(22),
    color: color.black,
  },
});
