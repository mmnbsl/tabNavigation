import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ContactDetail extends Component {
    render() {
        const { who } = this.props.route.params;
        return (
            <View style={style.container}>
                <Text>ContactDetail</Text>
                <Text>{who}</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})