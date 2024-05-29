import { CustomStatusBar, Header } from '@components';
import imageIndex from '@imageIndex';
import React, { FC } from 'react';
import { Image, View } from 'react-native';
import { styles } from './login.style';
import useLogin from './useLogin';

const Login: FC = () => {
  const {onPressBackIcon} = useLogin();
  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <View style={styles.mainContainer}>
        <Header label="Login" showBackIcon onPressBackIcon={onPressBackIcon} />
        <View style={styles.contentContainer}>
          <Image
            source={imageIndex.demo}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      </View>
    </View>
  );
};

export default Login;
