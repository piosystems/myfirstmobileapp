import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import App1 from './App1';
import App2 from './App2';
import { NavigationContainer } from '@react-navigation/native';
//Below requires npm install react-native-vector-icons @types/react-native-vector-icons. Using it for Tab Navigator icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {

  //below are some optional props that can be passed to Tab.Navigator. You can try the code with and without options
  const tabProps = {
    initialRouteName: 'App1Screen',
    tabBarOptions:{
      activeTintColor: 'green',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: '#eee',
      },
      backBehavior: 'history'//Behaviour when system back is touched. Options are none, initialRoute, order, history. This seems to be buggy
    },
    lazy: true //default is true
  }

  return (
    <NavigationContainer>
      <Tab.Navigator {...tabProps}>
        <Tab.Screen 
          name="App1Screen" 
          component={App1} 
          options={{
            tabBarLabel: 'App 1',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
              )
          }}
        />
        <Tab.Screen 
          name="App2Screen"
          component={App2} 
          options={{
            tabBarLabel: 'App 2',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell" color={color} size={size} />
              )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App