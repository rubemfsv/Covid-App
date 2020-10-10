import React, { useState } from 'react';
import { View, ActivityIndicator } from 'react-native';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import { useAuth } from '../hooks/auth';
import auth from '@react-native-firebase/auth';

const Routes: React.FC = () => {
  const { loading } = useAuth();

  const [logged, setLogged] = useState(false);

  auth().onAuthStateChanged(userLogged => {
    if (userLogged) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  });

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#232129" />
      </View>
    );
  }

  return logged ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
