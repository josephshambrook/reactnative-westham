import React, { Component } from 'react';
import { StyleSheet, StatusBar, SectionList, View, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import players from './../data/players';
import Theme from './../theme';
import Type from './../components/Type';

const SectionHeader = (props) => {
  const {title} = props;
  return (
    <View style={styles.sectionHeader}>
      <Type variant="h4" style={{color: '#fff'}}>{title}</Type>
    </View>
  )
}

const SectionItem = (props) => {
  const {number, name} = props;
  return (
    <View style={styles.sectionItem}>
      <Type>{number}. {name}</Type>
    </View>
  );
}

class Players extends Component {
  static navigationOptions = {
    ...Theme.subPageHeader,
    headerTitle: 'Players',
  };

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container}>
          <StatusBar
            barStyle="dark-content"
          />

          <SectionList
            renderItem={({item, index}) => <SectionItem {...item} key={index} />}
            renderSectionHeader={({section: {title}}) => <SectionHeader title={title} />}
            sections={players}
            keyExtractor={(item, index) => item + index}
            ItemSeparatorComponent={(sectionId, rowId) => <View key={rowId} style={styles.sectionSeparator} />}
            style={styles.section}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  container: {
    flex: 1
  },
  section: {
  },
  sectionSeparator: {
    borderColor: Theme.colorGrey400,
    borderStyle: 'solid',
    borderWidth: StyleSheet.hairlineWidth
  },
  sectionHeader: {
    backgroundColor: Theme.colorPrimary,
    padding: 10
  },
  sectionItem: {
    padding: 10
  }
});

export default Players;
