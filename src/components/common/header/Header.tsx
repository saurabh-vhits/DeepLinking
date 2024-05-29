import SvgIndex from '@svgIndex';
import React, {FC, memo} from 'react';
import {View} from 'react-native';
import RNText from '../rnText/RNText';
import RnTouchableOpacity from '../rnTouchableOpacity/RNTouchableOpacity';
import {styles} from './header.style';
import {HeaderProps} from './headerProps';

const Header: FC<HeaderProps> = ({
  containerStyle,
  label,
  showBackIcon,
  onPressBackIcon,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {showBackIcon && (
        <RnTouchableOpacity onPress={onPressBackIcon} style={styles.backButton}>
          <SvgIndex.backIcon />
        </RnTouchableOpacity>
      )}
      <RNText style={styles.labelText}>{label}</RNText>
    </View>
  );
};

export default memo(Header);
