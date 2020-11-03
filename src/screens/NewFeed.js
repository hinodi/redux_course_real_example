import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

import Header from '../components/Header';
import List from '../components/List';
import ListItem from '../components/ListItem';

export default class NewFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listPosts: [],
      savedPosts: [],
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

  onSave = (item) => {
    const isSaved = this.state.savedPosts.some((e) => e.id === item.id);

    if (isSaved) {
      this.setState((state) => ({
        savedPosts: state.savedPosts.filter((e) => e.id !== item.id),
      }));
    } else {
      this.setState((state) => ({
        savedPosts: [...state.savedPosts, item],
      }));
    }
  };

  goToDetail = (item) => {
    this.props.navigation.navigate('Detail', {
      data: item.data,
      isSaved: this.state.savedPosts.some((e) => e.id === item.data.id),
      callback: () => {
        this.onSave(item.data);
      },
    });
  };

  onStarButtonPressed = () => {
    this.props.navigation.navigate('SavedPost', {
      data: this.state.savedPosts,
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header
          number={this.state.savedPosts.length}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
