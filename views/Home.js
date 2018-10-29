import React, { Component } from 'react';
import { 
  StyleSheet, 
  Button, 
  View, 
  SafeAreaView, 
  StatusBar,
  FlatList
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Theme from './../theme'
import Crest from './../components/Crest';
import ListLink from './../components/ListLink';

const navigationLinks = [
  {
    key: 'history',
    title: 'History',
    link: 'History'
  },
  {
    key: 'players',
    title: 'Players',
    link: 'Players'
  },
  {
    key: 'typetest',
    title: 'Type Component Test page',
    link: 'TypeTest'
  }
];

class Home extends Component {
  static navigationOptions = {
    ...Theme.mainPageHeader,
    title: 'Home'
  };

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar
          backgroundColor={Theme.colorWestHamPrimary}
          barStyle="light-content"
        />
        <ScrollView style={styles.container}>
          <View style={styles.homeCrest}>
            <Crest />
          </View>

          <View style={styles.list}>
            <Button
              title="Go to History"
              onPress={() => this.props.navigation.navigate('History')}
            />
            <FlatList
              data={navigationLinks}
              renderItem={({item}) => <ListLink to={item.link}>{item.title}</ListLink>}
              ItemSeparatorComponent={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
            />
          </View>          
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  homeCrest: {
    alignItems: 'center',
    marginVertical: 30
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: Theme.colorGrey500,
  },
  list: {
    borderColor: Theme.colorGrey500,
    borderStyle: 'solid',
    borderWidth: 1,
    margin: 10
  }
});

export default Home;
