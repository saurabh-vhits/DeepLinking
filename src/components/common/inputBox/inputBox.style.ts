import color from '@theme/color';
import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-scaling';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: scale(20),
  },
  labelText: {
    fontSize: scale(16),
    marginBottom: scale(8),
    color: color.black,
  },
  inputContainer: {
    height: scale(46),
    justifyContent: 'center',
    paddingHorizontal: scale(10),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: color.lightgray,
  },
  input: {
    fontSize: scale(14),
    color: color.black,
  },
  errorView: {
    marginTop: scale(6),
    height: scale(16),
    justifyContent: 'flex-start',
  },
  errorText: {
    fontSize: scale(12),
    color: color.warning,
  },
});
