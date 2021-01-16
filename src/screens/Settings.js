import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class Settings extends Component {
    render() {
        const {navigate} = this.props.navigation
        return (
            <View style = {style.container}>
                <Text>Setttings</Text>
                <Button 
                    title = {'Open Modal'}
                    onPress = {()=> {
                        navigate('SettingsModal')
                    }}
                />
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