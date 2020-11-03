import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class ListCommentItem extends React.Component {
  render() {
    const {body} = this.props.data;
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemBody}>{body}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 20,
  },
  itemBody: {
    fontSize: 20,
  },
});
