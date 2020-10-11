import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const src: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#5e4d39"
        translucent
      />
      <View style={{ flex: 1, backgroundColor: '#ded4c8' }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default src;
