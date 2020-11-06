import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';

import Header from '../components/Header';
import List from '../components/List';
import ListItem from '../components/ListItem';
import {getListPost} from '../redux/action';

class NewFeed extends React.Component {
  componentDidMount() {
    this.props.getListPost();
  }

  goToDetail = (item) => {
    this.props.navigation.navigate('Detail', {
      data: item.data,
    });
  };

  onStarButtonPressed = () => {
    this.props.navigation.navigate('SavedPost');
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header
          number={this.props.savedPosts.length}
          onPress={this.onStarButtonPressed}
        />
        <List
          data={this.props.listPosts}
          item={(props) => (
            <ListItem {...props} onPress={() => this.goToDetail(props)} />
          )}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    savedPosts: state.savedPosts,
    listPosts: state.listPosts,
  };
};

const dispatchToProps = {
  getListPost,
};

export default connect(mapStateToProps, dispatchToProps)(NewFeed);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
