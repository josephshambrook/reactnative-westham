import React, { Component } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Type from './../components/Type';

class Players extends Component {
  static navigationOptions = {
    title: 'Players',
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar
          barStyle="dark-content"
        />

        <Type variant="h1">Hello Players</Type>
        <Type variant="h2">Hello Players</Type>
        <Type variant="h3">Hello Players</Type>
        <Type variant="h4">Hello Players</Type>
        <Type variant="h5">Hello Players</Type>
        <Type variant="paragraph">Hello Players</Type>
        <Type variant="small">Hello Players</Type>
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

export default Players;
