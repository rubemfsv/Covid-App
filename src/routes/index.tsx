import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes: React.FC = () => {
  const [logged, setLogged] = useState(false);

  auth().onAuthStateChanged(userLogged => {
    if (userLogged) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  });

  return logged ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
