import { ViewStyle } from 'react-native';

interface InputBoxProps {
  containerStyle?: ViewStyle;
  label?:string
  inputContainerStyle?:ViewStyle
  placeholder:string
  placeholderTextColor?:string
  error?:string
 value?: string;
  onChangeText?: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  multiline?: boolean;
  numberOfLines?: number;
  maxLength?: number;
  editable?: boolean;
}
