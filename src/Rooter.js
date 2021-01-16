import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen';
import Profile from './screens/Profile';
import Settings from './screens/Settings';
import Messages from './screens/Messages';
import ContactDetail from './screens/ContactDetail';
import Contact from './screens/Contact';

const Tab = createBottomTabNavigator()
const ContactStack = createStackNavigator() 

export default class Rooter extends Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator 
                    initialRouteName = 'Home'
                    tabBarOptions = {{
                        activeTintColor: 'red'
                        
                    }}>
                    <Tab.Screen
                        name = 'Home'
                        component = {HomeScreen}
                        options = {{
                            tabBarLabel : 'Ana Sayfa',
                            tabBarIcon : ({ color }) => (
                                <Icon
                                    name = 'home'
                                    size = {24}
                                    color={color}
                                />
                            )
                        }}
                    />
                    <Tab.Screen
                        name= 'ContactStackComponent'
                        component = {ContactStackComponent}
                        options = {{
                            tabBarLabel : 'Contact',
                            tabBarIcon : ( {color} ) => (
                                <Icon
                                    name = 'people-circle'
                                    size = {24}
                                    color = {color}
                                />
                            )
                        }}
                    />
                    <Tab.Screen
                        name='Profile'
                        component={Profile}
                        options = {{
                            tabBarIcon : ({color} ) => (
                                <Icon
                                    name='person'
                                    size={24}
                                    color = {color}
                                />
                            )
                        }}
                    />
                    <Tab.Screen
                        name='Messages'
                        component={Messages}
                        options = {{
                            tabBarIcon : ( {color} ) => (
                                <Icon
                                    name = 'chatbox-ellipses'
                                    size = {24}
                                    color = { color }
                                />
                            )
                        }}
                    />
                    <Tab.Screen
                        name='Settings'
                        component={Settings}
                        options={{
                            tabBarIcon: ({ color }) => (
                                <Icon
                                    name='settings'
                                    size={24}
                                    color={color}
                                />
                            )
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}
class ContactStackComponent extends Component{
    render() {
        return(
            <ContactStack.Navigator initialRouteName = {'Contact'}>
                <ContactStack.Screen 
                    name= 'Contact'
                    component = {Contact}
                    options = {{
                        
                    }}
                    />
                <ContactStack.Screen
                    name='ContactDetail'
                    component={ContactDetail}
                    options={({ route }) => ({
                        title : route.params.who
                    })} />
            </ContactStack.Navigator>
        )
    }
}
