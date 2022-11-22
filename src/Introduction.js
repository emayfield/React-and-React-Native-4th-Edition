import * as React from "react";
import * as ReactDOM from "react-dom";
import { Text, View } from 'react-native';
import { Component } from 'react';

function App() {
    return (
    <p>
        Hello, <strong>JSX</strong>
    </p>
)
};

const YourApp = () => {
    return (
        <View style = {{ flex:1, justifyContent: "center", alignItems: "center"}}>
            <Text>
                Try editing me! 🎉
            </Text>
        </View>
    )
}

// Function component - "future-facing" way of making components
const HelloWorldApp = () => {
    return (
        <View style = {{
            flex:1,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Text> Hello World!</Text>
        </View>
    )
}

// Class component - outdated with the introduction of Hooks
class HelloWorldClassApp extends Component {
    render() {
        return (
            <View style = {{
                flex:1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text> Hello World!</Text>
            </View>
        );
    }
}

export default HelloWorldClassApp;
