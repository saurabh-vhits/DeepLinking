import React, {FC, memo} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {styles} from './loader.style';
import {LoaderProps} from './loaderProps';

const Loader: FC<LoaderProps> = ({containerStyle, size, color, animating}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <ActivityIndicator color={color} size={size} animating={animating} />
    </View>
  );
};

export default memo(Loader);
