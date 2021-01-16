import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class ModalSettings extends Component {
    render() {
        const { goBack } = this.props.navigation
        return (
            <View style={style.container}>
                <Text>ModalSettings</Text>
                <Button 
                    title = 'Close Modal'
                    onPress = {()=> {
                        goBack()
                    }}
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