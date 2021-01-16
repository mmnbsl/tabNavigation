import React, { Component } from 'react';
import { SafeAreaView, TextInput, View, FlatList, Image, Text, StyleSheet, StatusBar, Platform, ActivityIndicator, Alert, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default class ContactList extends Component {

    constructor() {
        super()
        this.state = {
            jsonData: [],
            page: 1,
            allJsonData: [],
            searchText: '',
            isLoading: false,
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        this.setState({
            isLoading: true,
        })

        try {
            await axios(`https://randomuser.me/api/?results=50&page=${this.state.page}`)
                .then(({ data: { results } }) => {
                    console.log(results)
                    this.setState({
                        jsonData: results,
                        allJsonData: results,
                        isLoading: false,
                    })
                })
        } catch (error) {
            Alert.alert('Sunucu Bağlantısı Kurulamadı!')
        }


    }
    _loadMore = () => {
        this.setState({
            page: this.state.page + 1,
        })
        this.getData()
    }
    render() {
        const { navigation } = this.props
        const mainContainer = Platform.select({
            ios: style.mainContainerIos,
            android: style.mainContainerAndroid
        })

        const _renderItem = ({ item, index }) => {
            return (
                <TouchableOpacity 
                    onPress = {()=>{
                        navigation.navigate('ContactDetail', {
                            name : `${item.name.title} ${item.name.first} ${item.name.last}`,
                            city : item.location.city,
                            imgUri : item.picture.thumbnail
                        })
                }}>
                    <View style={[style.viewContainer, { backgroundColor: index % 2 === 1 ? '#f9f9f9' : '' }]}>
                        <View style={style.itemContainer}>
                            <Image
                                style={style.avatar}
                                source={{ uri: item.picture.thumbnail }}
                            />
                            <View>
                                <Text>{`${item.name.title} ${item.name.first} ${item.name.last}`}</Text>
                                <Text>{item.location.city}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }

        const _filter = (text) => {
            const newData = this.state.allJsonData.filter((item) => {
                const listItem = `${item.name.first.toLowerCase()} ${item.name.last.toLowerCase()} ${item.location.city.toLowerCase()}`;
                return listItem.indexOf(text.toLowerCase()) > -1;
            })
            this.setState({ jsonData: newData })
            this.setState({ searchText: text })
        }

        const _headerComponent = () => {
            return (
                <View style={style.inputContainer}>
                    <TextInput
                        style={style.input}
                        placeholder='Search..'
                        value={this.state.searchText}
                        onChangeText={item => {
                            _filter(item)

                        }}
                        keyboardType='default'
                    />
                </View>
            )
        }
        const _footerComponent = () => {
            if (!this.state.isLoading) return null;
            return (
                <View style={style.indicatorContainer}>
                    <ActivityIndicator size={'large'} color="#0000ff" />
                </View>
            )
        }

        return (
            <SafeAreaView style={mainContainer}>
                <FlatList
                    data={this.state.jsonData}
                    onChangeText = {(text)=>
                        this.setState({searchText : text})}
                    renderItem={_renderItem}
                    keyExtractor={(item) => item.login.uuid}
                    ListHeaderComponent={_headerComponent}
                    stickyHeaderIndices={[0]} //Header'ı sabitledi
                    ListFooterComponent={_footerComponent} //liste boşken yada liste dolu iken, listenin altında olan kısım (biz progress bar göstermek için kullanıyoruz)
                    onEndReached={this._loadMore} //listenin sonuna indiğimizde çalışır
                    onEndReachedThreshold={0} // (sadece IOS'ta 0) sona ne kadar yaklaştığımızda onEndReached'ın çalışacağını belirlemek için
                    onMomentumScrollBegin={() => { }} //scroll hareketi başladığı anda çalışır
                />
            </SafeAreaView>
        )
    }
}
const style = StyleSheet.create({
    mainContainerIos: {
        flex: 1,
        width: '100%',
        paddingTop: StatusBar.currentHeight
    },
    mainContainerAndroid: {
        flex: 1,
        width: '100%',
        paddingTop: StatusBar.currentHeight
    },
    viewContainer: {
        flex: 1,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 25,
        marginHorizontal: 10
    },
    inputContainer: {
        flex: 1,
        borderWidth: 0.5,
        borderColor: '#000',
        borderRadius: 10,
        marginHorizontal: 5,
        backgroundColor: 'white'
    },
    input: {
        height: 50,
        marginHorizontal: 10,
    },
    indicatorContainer: {
        paddingVertical: 10
    }
})