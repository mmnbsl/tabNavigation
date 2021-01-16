import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Sonuc extends Component {
    render() {
        return (
            <View style={style.container}>
                <Text>Sonuç</Text>
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