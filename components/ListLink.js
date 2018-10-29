import React, { Component } from 'react';
import { 
  Button,
  Platform,
  TouchableNativeFeedback,
  TouchableHighlight,
  Text,
  View
} from 'react-native';
import { withNavigation } from 'react-navigation';
import ListItem from './ListItem';

const SmartButton = ({children, ...props}) => {
  return Platform.OS === 'android' ? (
    <TouchableNativeFeedback {...props} background={TouchableNativeFeedback.SelectableBackground()}>
      <View><ListItem>{children}</ListItem></View>
    </TouchableNativeFeedback>
  ) : (
    <TouchableHighlight {...props}>{children}</TouchableHighlight>
  )
}

const ListLink = ({to, navigation}) => {
  return (
    <SmartButton onPress={() => navigation.navigate(to)}>
      <ListItem>Navigate to {to}</ListItem>
    </SmartButton>
  )
}
 
export default withNavigation(ListLink);
