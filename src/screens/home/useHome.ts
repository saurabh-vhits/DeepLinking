import {useAuthNavigation} from '@hooks/useAppNavigation';
import {useCallback} from 'react';

const useHome = () => {
  const navigation = useAuthNavigation();

  /** handle back navigation */
  const onPressBackIcon = useCallback(() => {
    navigation.navigate('Login');
  }, []);

  return {onPressBackIcon};
};

export default useHome;
