/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Counter from './Counter';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const StackNavigator = createStackNavigator({
  Initial: {
    screen: Counter,
    navigationOptions: () => {
      return {
        title: 'Test Redux',
        headerTitleStyle: {
          color: 'white',
          fontSize: 35,
          flexGrow: 1,
          textAlign: 'center',
        },
        headerStyle: {
          backgroundColor: '#f21667',
        },
      };
    },
  },
});

const App = createAppContainer(StackNavigator);

export default App;
