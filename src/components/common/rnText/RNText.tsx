import React, {FC, memo} from 'react';
import {Text} from 'react-native';
import {RNTextProps} from './rnTextProps';

const RNText: FC<RNTextProps> = ({children, style,numberOfLines}) => {
  return (
    <Text style={style} allowFontScaling={false} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};

export default memo(RNText);
