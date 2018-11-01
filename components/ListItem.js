import React, { Component } from 'react';
import { View } from 'react-native';
import Type from './Type';

class ListItem extends Component {
  render() {
    return (
      <Type>{this.props.children}</Type>
    );
  }
}
 
export default ListItem;
