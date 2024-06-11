import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Tabs from './src/components/nav/Tabs';
import { UserProvider } from './src/contexts/UserContext';

const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </UserProvider>
  );
};


``


export default App;
``