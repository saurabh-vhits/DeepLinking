import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {HeaderProps} from './headerProps';
import {styles} from './header.style';

const Header: FC<HeaderProps> = ({containerStyle, label, showBackIcon}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text>Header</Text>
    </View>
  );
};

export default Header;
