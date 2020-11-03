import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export default class ListItem extends React.Component {
  render() {
    const {onPress, data} = this.props;
    const {title, body} = data;
    return (
      <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemBody}>{body}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 20,
  },
  itemTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  itemBody: {
    fontSize: 24,
    fontWeight: '500',
  },
});
