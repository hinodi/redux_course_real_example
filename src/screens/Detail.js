import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const starIcon = require('../assets/image/star_icon.png');
const backIcon = require('../assets/image/back_icon.png');

import List from '../components/List';
import ListCommentItem from '../components/ListCommentItem';
import ListItem from '../components/ListItem';

export default class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listComments: [],
      isSaved: props.route.params.isSaved,
    };
  }

  componentDidMount() {
    let postId = this.props.route.params.data.id;

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((json) => {
        this.setState({listComments: json});
      })
      .catch((error) => {
        console.error(error);
      });
  }

  goBack = () => this.props.navigation.goBack();

  onSave = () => {
    this.setState((state) => ({isSaved: !state.isSaved}));
    this.props.route.params.callback();
  };

  render() {
    const headerRightIconColor = this.state.isSaved ? '#ff000090' : '#00000020';

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.headerButtonContainer}
            onPress={this.goBack}>
            <Image source={backIcon} style={styles.headerLeftIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.headerButtonContainer}
            onPress={this.onSave}>
            <Image
              source={starIcon}
              style={[
                styles.headerRightIcon,
                {tintColor: headerRightIconColor},
              ]}
            />
          </TouchableOpacity>
        </View>
        <ListItem data={this.props.route.params.data} />
        <List data={this.state.listComments} item={ListCommentItem} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  //
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerRightIcon: {
    width: 30,
    height: 30,
    tintColor: '#00000020',
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
