import {ViewStyle} from 'react-native';

interface RNTouchableHighlightProps {
  children?: React.ReactNode;
  onPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  style?: ViewStyle;
  underlayColor?: string;
  disabled?: boolean;
}
