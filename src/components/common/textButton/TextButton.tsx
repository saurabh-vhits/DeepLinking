import color from '@theme/color';
import React, { FC, memo, useEffect } from 'react';
import { View } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
} from 'react-native-reanimated';
import Loader from '../loader/Loader';
import RNTouchableHighlight from '../rnTouchableHighlight/RNTouchableHighlight';
import { styles } from './textButton.style';
import { TextButtonProps } from './textButtonProps';

const TextButton: FC<TextButtonProps> = ({
  containerStyle,
  label,
  onPress,
  isLoading,
  ...restProps
}) => {
  const loaderOpacity = useSharedValue(0);
  const labelOpacity = useSharedValue(0);
  const loaderScale = useSharedValue(1);
  const labelScale = useSharedValue(2);

  const animatedLoaderStyles = useAnimatedStyle(() => ({
    opacity: loaderOpacity.value,
    transform: [{scale: loaderScale.value}],
  }));

  const animatedLabelStyles = useAnimatedStyle(() => ({
    opacity: labelOpacity.value,
    transform: [{scale: labelScale.value}],
  }));

  useEffect(() => {
    if (isLoading) {
      loaderOpacity.value = withSpring(1, {stiffness: 100, damping: 10});
      loaderScale.value = withSpring(1, {stiffness: 100, damping: 10});
      labelOpacity.value = withTiming(0, {duration: 300});
      labelScale.value = withTiming(0.5, {duration: 300});
    } else {
      loaderOpacity.value = withTiming(0, {duration: 300});
      loaderScale.value = withSpring(0.5, {stiffness: 100, damping: 10});
      labelOpacity.value = withTiming(1, {duration: 300});
      labelScale.value = withSpring(1, {stiffness: 100, damping: 10});
    }
  }, [isLoading]);

  return (
    <View style={[styles.container, containerStyle]}>
      <RNTouchableHighlight
        onPress={onPress}
        style={styles.buttonContainer}
        {...restProps}>
        {isLoading ? (
          <Animated.View style={animatedLoaderStyles}>
            <Loader size="small" color={color.white} />
          </Animated.View>
        ) : (
          <Animated.Text
            style={[styles.labelText, animatedLabelStyles]}
            allowFontScaling={false}
            numberOfLines={1}>
            {label}
          </Animated.Text>
        )}
      </RNTouchableHighlight>
    </View>
  );
};

export default memo(TextButton);
