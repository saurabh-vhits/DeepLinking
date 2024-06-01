import {ViewStyle} from 'react-native';
import {RNTouchableHighlightProps} from '../rnTouchableHighlight/rnTouchableHighlightProps';

interface TextButtonProps extends RNTouchableHighlightProps {
  containerStyle?: ViewStyle;
  label: string;
  onPress?: () => void;
  isLoading?:boolean
}
