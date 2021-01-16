import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Settings extends Component {
    render() {
        return (
            <View style = {style.container}>
                <Text>Setttings</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})