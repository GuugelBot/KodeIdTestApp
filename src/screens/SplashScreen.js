import React, { Component } from 'react';
import { View, Text, StatusBar, Image } from 'react-native';

class SplashScreen extends Component {

  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve('result')
      }, 2000)
    )
  }

  async componentDidMount() {
    StatusBar.setBackgroundColor('#f93a4b')
    const data = await this.performTimeConsumingTask();
    if (data !== null) {
      this.props.navigation.navigate('App');
    }
  }

  componentWillUnmount() {
    StatusBar.setBackgroundColor('grey');
  }

  render() {
    return (
      <View style={styles.viewStyles}>
        <Image style={styles.logoStyles} source={require('../assets/images/kode_logo.png')} />
        <Text style={styles.textStyles}>Free Version</Text>
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f93a4b'
  },
  logoStyles: {
    width: 172,
    height: 72,
    resizeMode: 'contain'
  },
  textStyles: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
}

export default SplashScreen;
