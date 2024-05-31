import React, {FC, memo} from 'react';
import {Text} from 'react-native';
import {RNTextProps} from './rnTextProps';

const RNText: FC<RNTextProps> = ({children, style}) => {
  return (
    <Text style={style} allowFontScaling={false}>
      {children}
    </Text>
  );
};

export default memo(RNText);
