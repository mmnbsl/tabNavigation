import React, { Component } from 'react';
import {
    View, 
    Text, 
    StyleSheet,
    Image 
} from 'react-native';

export default class ContactDetail extends Component {
    
    componentDidMount(){
        this.props.navigation.setOptions({
            headerBackTitle : 'Back'
        })
    }
    render() {
        const {name, city, imgUri} = this.props.route.params
        return (
            <View style={style.container}>
                <Image
                    source = {{uri : imgUri}}
                    style = {style.avatar}
                />
                <Text style ={style.name}>{name}</Text>
                <Text style = {style.city}>{city}</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems : 'center'
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 25,
        marginHorizontal: 10
    },
    name : {
        fontSize : 20,
        fontWeight : 'bold',
        paddingVertical : 20
    },
    city : {
        fontSize : 18
    }
})