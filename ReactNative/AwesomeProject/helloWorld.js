import React, { Component } from 'react';
import { Text, View } from 'react-native';

class HelloWorldApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <View>
        <Text>Hello, world!</Text>
        <Text>{this.state.date.toLocaleTimeString()}</Text>
      </View>
    );
  }
}

export default HelloWorldApp;