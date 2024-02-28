import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeStackNavigation from '../src/navigations/AppNavigation';
import {useDispatch, useSelector} from 'react-redux';
import {userLogin} from './context/userSlice';
import Constants from './utils/Constants';
import {getItem} from './utils/Utils';
import {AuthNavigation} from './navigations/AuthNavigation';
import Splashscreen from './screens/SplashScreen';
import {userData} from './context/dataSlice';

const Main = () => {
  const isLoggedIn = useSelector((state: any) => state.userReducer.isLoggedIn);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const isLogin = await getItem(Constants.IS_LOGIN);

      if (isLogin === 'true') {
        dispatch(userLogin(true));
        const userDatas = (await getItem(Constants.USER_DATA)) ?? '{}';
        const parsedData = JSON.parse(userDatas);
        dispatch(userData(parsedData));
      } else {
        dispatch(userLogin(false));
      }
      setIsLoading(false);
    })();
  }, []);
  return isLoading ? (
    <Splashscreen />
  ) : (
    <NavigationContainer>
      {isLoggedIn ? <HomeStackNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};
export default Main;
