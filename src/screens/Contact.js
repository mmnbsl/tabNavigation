import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ContactList from '../components/ContactList';

export default class Contact extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={style.container}>
                <ContactList navigation = {this.props.navigation}/>
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