import React, { Component } from 'react'
import {
    View,Text
} from 'react-native'
export default class Mine extends Component {

    static navigationOptions={
        title:"我的",
        headerTintColor:'red',
    }

    render() {
        return (
            <View style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'gray'
            }}>
                <Text style={{fontSize:38}}>我的</Text>
            </View>
        )
    }
}
