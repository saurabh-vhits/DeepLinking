import color from '@theme/color';
import React, {FC, memo} from 'react';
import {TouchableHighlight} from 'react-native';
import {RNTouchableHighlightProps} from './rnTouchableHighlightProps';

const RNTouchableHighlight: FC<RNTouchableHighlightProps> = ({
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

export default memo(RNTouchableHighlight);
