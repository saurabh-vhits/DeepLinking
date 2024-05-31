import React, {FC, memo} from 'react';
import {TouchableHighlight} from 'react-native';
import {RNTouchableHighlightProps} from './rnTouchableHighlightProps';

const RNTouchableHighlight: FC<RNTouchableHighlightProps> = ({
  children,
  onPress,
  onPressIn,
  onPressOut,
  style,
  underlayColor,
  disabled,
}) => {
  return (
    <TouchableHighlight
      underlayColor={underlayColor}
      activeOpacity={0.6}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={style}
      disabled={disabled}>
      {children}
    </TouchableHighlight>
  );
};

export default memo(RNTouchableHighlight);
