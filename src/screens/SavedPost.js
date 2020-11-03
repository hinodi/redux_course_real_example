import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import List from '../components/List';
import ListItem from '../components/ListItem';
const backIcon = require('../assets/image/back_icon.png');

export default class SavedPost extends React.Component {
  goBack = () => this.props.navigation.goBack();
  render() {
    console.log(this.props.route.data);
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.headerButtonContainer}
            onPress={this.goBack}>
            <Image source={backIcon} style={styles.headerLeftIcon} />
          </TouchableOpacity>
        </View>
        <List
          data={this.props.route.params.data}
          item={(props) => (
            <ListItem {...props} onPress={() => this.goToDetail(props)} />
          )}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLeftIcon: {
    width: 30,
    height: 30,
    tintColor: '#000000',
  },
  headerButtonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
