import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'
export default class YkNet extends Component {

    constructor() {
        super()
        this.state = {

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
            console.log(responseJson)
            return responseJson;
        } catch (error) {
            console.error(error);
        }
    }


    render() {
        return (
            <View>
                <Text>请求网络数据</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})