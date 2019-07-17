import React, { Component } from 'react';
import { StyleSheet, ImageBackground, View, Text, TouchableHighlight } from 'react-native';
import { Card, Image } from 'react-native-elements';

export default class VideoItem extends Component {
  render() {
    let video = this.props.video;
    let { navigate } = this.props.navigation;
    return (
      <TouchableHighlight underlayColor='lightgrey' onPress={() => navigate('VideoScreen', { url: video.url })}>
        <View style={styles.container}>
          <Card containerStyle={styles.cardContainer}>
            <ImageBackground style={styles.videoImage} source={{ uri: video.thumbnail }}>
              <View style={styles.durationContainer}>
                <Text style={styles.durationText}>{video.duration}</Text>
              </View>
            </ImageBackground>
            <View style={styles.descContainer}>
              <Image source={{ uri: video.instructor.avatar }} style={styles.avatarImage}/>
              <View style={styles.videoDetails}>
                <Text numberOfLines={1} style={styles.videoTitle}>{video.title}</Text>
                <Text numberOfLines={1} style={styles.videoInstructor}>{video.instructor.name}</Text>
              </View>
            </View>
          </Card>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    marginBottom: 8
  },
  cardContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    margin: 0,
    padding: 0
  },
  descContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 8
  },
  videoImage: {
    height: 196
  },
  videoTitle: {
    fontSize: 18,
    color: '#414141',
    fontWeight: 'bold'
  },
  videoDetails: {
    paddingHorizontal: 16
  },
  durationContainer: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: '#000000BD',
    paddingLeft: 8,
    paddingRight: 6,
    paddingTop: 0,
    paddingBottom: 2,
    borderRadius: 4,
  },
  durationText: {
    color: 'white',
    fontSize: 16,
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 8
  },
  videoInstructor: {
    fontSize: 14,
    color: '#414141',
    paddingTop: 4
  }
});
