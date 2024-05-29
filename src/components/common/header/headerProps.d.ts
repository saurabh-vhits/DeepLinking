import {ViewStyle} from 'react-native';

interface HeaderProps {
  label: string;
  showBackIcon?: boolean;
  onPressBackIcon?:()=>void
  containerStyle?: ViewStyle;
}
