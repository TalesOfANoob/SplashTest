/* eslint-disable prettier/prettier */
import React,{useEffect,useState} from 'react';
import {View} from 'react-native';
import {MainStackNavigator} from './src/navigation';
import SplashScreen from 'react-native-splash-screen';
const App = () => {

  const [hideSplash,setHideSplash] = useState(false);


  useEffect(()=>{
    setTimeout(()=>{
      setHideSplash(true);
    },1200);
  },[]);

  useEffect(()=>{
    hideSplash && SplashScreen.hide();
  },[hideSplash]);

  console.log(hideSplash);
 
  return (

        <View style={{flex: 1}}>
          <MainStackNavigator />
        </View>
  );
};

export default App;
