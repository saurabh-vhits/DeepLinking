import { ViewStyle } from "react-native";

interface LoaderProps {
  containerStyle?: ViewStyle;
  size?: number | 'small' | 'large';
  color?: string;
  animating?: boolean;
}