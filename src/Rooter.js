import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer' 
import HomeScreen from './screens/HomeScreen';
import Profile from './screens/Profile';
import Settings from './screens/Settings';
import Messages from './screens/Messages';
import ContactDetail from './screens/ContactDetail';
import Contact from './screens/Contact';
import ModalSettings from './screens/ModalSettings';

//-----Top Navigation Screens -------//
import Giris from './screens/top-Tabs/Giris';
import Gelisme from './screens/top-Tabs/Gelisme';
import Sonuc from './screens/top-Tabs/Sonuc';
import { ColorPropType } from 'react-native';

const TopTabs = createMaterialTopTabNavigator();
const Tab = createBottomTabNavigator()
const ContactStack = createStackNavigator()
const ModalSettingsStack = createStackNavigator();
const Drawer = createDrawerNavigator();

class Rooter extends Component {
    render() {
        return (
                <Tab.Navigator 
                    initialRouteName = 'Home'
                    tabBarOptions = {{
                        activeTintColor: '#f8f8f8',
                        inactiveTintColor : '#586589',
                        // showLabel : false -> sadece iconları görünür yapar.
                        style : {
                            backgroundColor : '#171f33'
                        }
                        
                    }}>
                    <Tab.Screen
                        name= 'TopTabComponent'
                        component={TopTabComponent}
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
                        name='ModalSettingsStackComponent'
                        component={ModalSettingsStackComponent}
                        options={{
                            tabBarLabel : 'Settings',
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
                        headerTitleAlign : 'center'
                    }}
                    />
                <ContactStack.Screen
                    name='ContactDetail'
                    component={ContactDetail}
                    options={({ route }) => ({
                        //title : route.params.who
                    })} />
            </ContactStack.Navigator>
        )
    }
}
class ModalSettingsStackComponent extends Component{
    render() {
        return(
            <ModalSettingsStack.Navigator
                initialRouteName= 'Settings'
                mode = 'modal'> 
                
                <ModalSettingsStack.Screen
                    name = 'Settings'
                    component = {Settings}
                    options = {{
                        headerTitleAlign : 'center'
                    }}
                    
                />
                <ModalSettingsStack.Screen
                    name='SettingsModal'
                    component={ModalSettings}
                    options={{
                        headerShown : false
                    }}
                />

            </ModalSettingsStack.Navigator>
        )
    }
}

class TopTabComponent extends Component{
    render() {
        return(
            <TopTabs.Navigator>
                <TopTabs.Screen
                    name = 'Giris'
                    component = {Giris}
                />
                <TopTabs.Screen
                    name='Gelişme'
                    component={Gelisme}
                />
                <TopTabs.Screen
                    name='Sonuç'
                    component={Sonuc}
                />
            </TopTabs.Navigator>
        )
    }
}

export default class DrawerComponent extends Component{
    render(){
        return(
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen
                        name = 'Home'
                        component = {HomeScreen}
                    />
                    <Drawer.Screen
                        name = 'Tab Menu'
                        component = {Rooter}
                    />
                </Drawer.Navigator>
            </NavigationContainer>
        )
    }
}
