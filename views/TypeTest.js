import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Type from '../components/Type';

class TypeTest extends Component {
  static navigationOptions = {
    title: 'TypeTest',
  };

  render() {
    return (
       <ScrollView contentContainerStyle={styles.container}>
         <Type variant="h1">A Visual Type Scale</Type>
         <Type variant="h2">A Visual Type Scale</Type>
         <Type variant="h3">A Visual Type Scale</Type>
         <Type variant="h4">A Visual Type Scale</Type>
         <Type variant="h5">A Visual Type Scale</Type>
         <Type variant="paragraph">A Visual Type Scale</Type>
         <Type variant="small">A Visual Type Scale</Type>
       </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  }
});

export default TypeTest;
