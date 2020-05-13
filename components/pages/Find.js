import React, { Component } from 'react'
import {
    View,Text
} from 'react-native'
export default class Find extends Component {
    render() {
        return (
            <View style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'skyblue'
            }}>
                <Text style={{fontSize:38}}>发现</Text>
            </View>
        )
    }
}
