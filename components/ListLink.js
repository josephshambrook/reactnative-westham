import React, { Component } from 'react';
import { 
  Button,
  Platform,
  TouchableNativeFeedback,
  TouchableHighlight,
  Text,
  View,
  StyleSheet
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import ListItem from './ListItem';
import Theme from './../theme';

const SmartButton = ({children, ...props}) => {
  return Platform.OS === 'android' ? (
    <TouchableNativeFeedback
      background={
        Platform.Version >= 21 ?
          TouchableNativeFeedback.Ripple(Theme.colorPrimary, false) :
          TouchableNativeFeedback.SelectableBackground()
      }
      {...props}>
      {children}
    </TouchableNativeFeedback>
  ) : (
    <TouchableHighlight underlayColor={Theme.colorPrimary} {...props}>{children}</TouchableHighlight>
  )
}

const ListLink = ({to, navigation}) => {
  return (
    <SmartButton onPress={() => navigation.navigate(to)}>
      <View style={styles.link}>
        <ListItem style={styles.linkItem}>{to}</ListItem>
        <FontAwesome style={styles.linkIcon} name="chevron-right" size={18} color="black" />
      </View>
    </SmartButton>
  )
}

const styles = StyleSheet.create({
  link: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});
 
export default withNavigation(ListLink);
