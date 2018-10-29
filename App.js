import React from 'react';
import { createStackNavigator } from 'react-navigation';
import {Home, History, Players, TypeTest} from './views';

const RootStack = createStackNavigator(
  {
    Home,
    History,
    Players,
    TypeTest
  },
  {
    initialRouteName: 'Home'
  }
);

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}
