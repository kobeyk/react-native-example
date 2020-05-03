import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    Dimensions,
    ScrollView
} from 'react-native'

const screenW = Dimensions.get('window').width
export default class YkNet extends Component {

    constructor() {
        super()
        this.state = {
            dataSource: {

            }
        }
    }

    componentDidMount() {
        // fetch('http://demo.itlike.com/web/xlmc/api/homeApi').then((response) =>
        //     response.json())
        //     .then((responseJson) => {
        //         console.log(responseJson)
        //     }).catch((error) => {
        //         console.log(error)
        //     })
        this.getDataFromApi()
    }

    // 注意这个方法前面有async关键字
    async  getDataFromApi() {
        try {
            // 注意这里的await语句，其所在的函数必须有async关键字声明
            let response = await fetch(
                'http://demo.itlike.com/web/xlmc/api/homeApi',
            );
            let responseJson = await response.json();
            this.setState({
                dataSource: responseJson
            })
            console.log(responseJson)
            return responseJson;
        } catch (error) {
            console.error(error);
        }
    }

    _renderItems = () => {
        let items = this.state.dataSource
        // 组件数组，从网络请求的数据里面取到轮播图的icon地址
        let itemArray = []
        if (items && items.code === 0) {
            // 这里应该有判断，为了偷懒，不判断了
            items.data.list[0].icon_list.map((item, index) => {
                itemArray.push(
                    <View style={{marginTop:10}} key={index}>
                        <Image source={{ uri: item.icon_url }}
                            style={{ width: screenW, height: 200 ,resizeMode:'stretch'}} />
                    </View>
                )
            })
            //  返回组件数组
            return itemArray
        }
        return (<Text>无数据</Text>)
    }

    render() {
        return (
            <ScrollView>
                <Text style={{fontSize:20,color:'red'}}>请求网络数据</Text>
                {this._renderItems()}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({

})