import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

const starIcon = require('../assets/image/star_icon.png');

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>New Feed</Text>
        <TouchableOpacity
          style={styles.headerRightContainer}
          onPress={this.props.onPress}>
          <Text style={styles.headerRightNumber}>{this.props.number}</Text>
          <Image source={starIcon} style={styles.headerRightIcon} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  headerRightContainer: {
    flexDirection: 'row',
  },
  headerRightNumber: {
    fontSize: 30,
    fontWeight: '600',
    marginRight: 10,
  },
  headerRightIcon: {
    width: 30,
    height: 30,
    tintColor: '#ff000090',
  },
});
