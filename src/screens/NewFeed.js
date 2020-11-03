import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';

import Header from '../components/Header';
import List from '../components/List';
import ListItem from '../components/ListItem';

class NewFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listPosts: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        this.setState({listPosts: json});
      })
      .catch((error) => {
        console.error(error);
      });
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
          data={this.state.listPosts}
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
  };
};

export default connect(mapStateToProps)(NewFeed);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
