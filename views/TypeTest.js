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
         <Type variant="h1">H1: A Visual Type Scale</Type>
         <Type variant="h2">H2: A Visual Type Scale</Type>
         <Type variant="h3">H3: A Visual Type Scale</Type>
         <Type variant="h4">H4: A Visual Type Scale</Type>
         <Type variant="h5">H5: A Visual Type Scale</Type>
         <Type variant="paragraph">Paragraph: A Visual Type Scale</Type>
         <Type variant="normal">Normal: A Visual Type Scale</Type>
         <Type>Null: A Visual Type Scale</Type>
         <Type variant="small">Small: A Visual Type Scale</Type>
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
