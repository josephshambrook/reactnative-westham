import React, { Component } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Theme from './../theme';
import Type from './../components/Type';

class History extends Component {
  static navigationOptions = {
    ...Theme.subPageHeader,
    title: 'History',
  };

  render() {
    return (
      <React.Fragment>
        <StatusBar
          backgroundColor={Theme.colorSecondary}
          barStyle="dark-content"
        />
        <ScrollView contentContainerStyle={styles.container}>
          <Type variant="h1">Hello History</Type>
          <Type variant="h2">Hello History</Type>
          <Type variant="h3">Hello History</Type>
          <Type variant="h4">Hello History</Type>
          <Type variant="h5">Hello History</Type>
          <Type variant="paragraph">Hello History</Type>
          <Type variant="small">Hello History</Type>
        </ScrollView>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  }
});

export default History;
