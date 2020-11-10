/* eslint-disable prettier/prettier */
import React,{useEffect,useState} from 'react';
import {View} from 'react-native';
import {MainStackNavigator} from './src/navigation';
import SplashScreen from 'react-native-splash-screen';
const App = () => {

  useEffect(()=>{
    setTimeout(()=>{
      SplashScreen.hide();
    },1200);
  },[]);
 
  return (

        <View style={{flex: 1}}>
          <MainStackNavigator />
        </View>
  );
};

export default App;
