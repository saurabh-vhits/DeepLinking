import {
  CustomStatusBar,
  Header,
  InputBox,
  RNText,
  TextButton,
} from '@components';
import imageIndex from '@imageIndex';
import color from '@theme/color';
import React, {FC, useEffect, useState} from 'react';
import {Image, ScrollView, View} from 'react-native';
import {styles} from './login.style';
import useLogin from './useLogin';

const Login: FC = () => {
  const {onPressBackIcon, demoText} = useLogin();
  const [isLoading, setIsLoading] = useState(false);
  const onPress = () => {
    setIsLoading(!isLoading);
  };

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(!isLoading);
      }, 2000);
    }
  }, [isLoading]);

  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <View style={styles.mainContainer}>
        <Header label="Login" showBackIcon onPressBackIcon={onPressBackIcon} />
        <ScrollView
          contentInsetAdjustmentBehavior="always"
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}>
          <InputBox placeholder='Your Name' label='Name' error='Please enter you valid name'/>
          <TextButton
            label="Submit"
            onPress={onPress}
            underlayColor={color.lightgray}
            isLoading={isLoading}
          />
          <Image
            source={imageIndex.demo}
            style={styles.image}
            resizeMode="cover"
          />
          <RNText style={styles.paragraph}>{demoText}</RNText>
        </ScrollView>
      </View>
    </View>
  );
};

export default Login;
