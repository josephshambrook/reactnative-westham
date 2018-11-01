import React from 'react';
import { createStackNavigator } from 'react-navigation';
import {Home, History, Players, TypeTest, Website} from './views';

const RootStack = createStackNavigator(
  {
    Home,
    History,
    Players,
    TypeTest,
    Website
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
