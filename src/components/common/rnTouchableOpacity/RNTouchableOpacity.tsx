import color from '@theme/color';
import React, {FC, memo} from 'react';
import {TouchableHighlight} from 'react-native';
import {RNTouchableOpacityProps} from './rnTouchableOpacityProps';

const RNTouchableOpacity: FC<RNTouchableOpacityProps> = ({
  children,
  onPress,
  style,
}) => {
  return (
    <TouchableHighlight
      underlayColor={color.lightGray}
      activeOpacity={0.6}
      onPress={onPress}
      style={style}>
      {children}
    </TouchableHighlight>
  );
};

export default memo(RNTouchableOpacity);
