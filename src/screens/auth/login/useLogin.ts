import {useAuthNavigation} from '@hooks/useAppNavigation';
import {useCallback} from 'react';

const useLogin = () => {
  const navigation = useAuthNavigation();

  /** handle back navigation */
  const onPressBackIcon = useCallback(() => {
    navigation.navigate('Home');
  }, []);

  return {onPressBackIcon};
};

export default useLogin;
