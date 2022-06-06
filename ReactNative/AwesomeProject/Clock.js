import React, { Component } from "react";
import { View } from "react-native";

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }

    render() {
        return (
            <View>
                <Text>I'm a clock: {this.state.date.toLocaleDateString()}</Text>
            </View>
        );

    }
}

export default Clock;