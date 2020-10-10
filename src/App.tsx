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
        backgroundColor="#DED4C8"
        translucent
      />
      <View style={{ flex: 1, backgroundColor: '#DED4C8' }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default src;
