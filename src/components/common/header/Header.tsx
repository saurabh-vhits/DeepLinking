import SvgIndex from '@svgIndex';
import React, { FC, memo } from 'react';
import { View } from 'react-native';
import RNText from '../rnText/RNText';
import { styles } from './header.style';
import { HeaderProps } from './headerProps';
import RNTouchableHighlight from '../rnTouchableHighlight/RNTouchableHighlight';

const Header: FC<HeaderProps> = ({
  containerStyle,
  label,
  showBackIcon,
  onPressBackIcon,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {showBackIcon && (
        <RNTouchableHighlight onPress={onPressBackIcon} style={styles.backButton}>
          <SvgIndex.backIcon />
        </RNTouchableHighlight>
      )}
      <RNText style={styles.labelText}>{label}</RNText>
    </View>
  );
};

export default memo(Header);
