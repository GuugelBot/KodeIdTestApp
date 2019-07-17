import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import VideoItem from '../components/VideoItem';
import data from '../assets/raw/data.json';

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <FlatList
            contentContainerStyle={styles.listContainer}
            data={data.playlist}
            renderItem={(video) => <VideoItem video={video.item} navigation={this.props.navigation} />}
            keyExtractor={(item) => item.id.toString()} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    flex: 1,
    justifyContent: 'center',
  },
  listContainer: {
    paddingTop: 8,
    paddingBottom: 8
  }
});

export default HomeScreen;
