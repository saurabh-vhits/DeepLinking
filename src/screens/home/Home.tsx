import { CustomStatusBar, Header } from '@components';
import React, { FC } from 'react';
import { View } from 'react-native';
import { styles } from './home.style';
import useHome from './useHome';

const Home: FC = () => {
  const {onPressBackIcon} = useHome();
  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <View style={styles.mainContainer}>
        <Header label="Home" showBackIcon onPressBackIcon={onPressBackIcon} />
        <View style={styles.contentContainer}></View>
      </View>
    </View>
  );
};

export default Home;
