import React, { Component } from 'react'
import {
    View,Text
} from 'react-native'
export default class Nearby extends Component {
    render() {
        return (
            <View style={{
                flex:1,justifyContent:'center',
                alignItems:'center',backgroundColor:'yellow'
            }}>
                <Text style={{fontSize:38}}>附近人</Text>
            </View>
        )
    }
}
