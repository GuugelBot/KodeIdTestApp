import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import Video from 'react-native-video'
import Orientation from 'react-native-orientation'

class VideoScreen extends Component {

  componentDidMount() {
    StatusBar.setHidden(true);
    Orientation.lockToLandscape();
  }

  componentWillUnmount() {
    StatusBar.setHidden(false);
    Orientation.unlockAllOrientations();
  }

  render() {
    let videoUrl = this.props.navigation.state.params.url;
    return (
      <View style={styles.container}>
        <Video
          source={{ uri: videoUrl }}
          style={styles.backgroundVideo}
          ref={(ref) => this.player = ref}
          muted={false}
          repeat={false}
          resizeMode={'contain'}
          onLoad={() => { this.player.presentFullscreenPlayer() }}
          volume={1.0}
          rate={1.0}
          fullscreen={true}
          controls={true}
          ignoreSilentSwitch={'obey'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
  backgroundVideo: {
    position: 'absolute',
    backgroundColor: 'black',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default VideoScreen;
