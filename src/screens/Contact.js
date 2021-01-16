import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class Contact extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={style.container}>
                <Text>Contact</Text>
                <Button 
                    title = {'Go To Detail'} 
                    onPress = {()=> {navigate('ContactDetail',{
                        who : 'Mümin Başol'
                    })}}
                    />
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